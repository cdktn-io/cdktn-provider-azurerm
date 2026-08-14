# `dataAzurermKubernetesAutomaticCluster` Submodule <a name="`dataAzurermKubernetesAutomaticCluster` Submodule" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesAutomaticCluster <a name="DataAzurermKubernetesAutomaticCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster(
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
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermKubernetesAutomaticClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#timeouts DataAzurermKubernetesAutomaticCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermKubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermKubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKubernetesAutomaticCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKubernetesAutomaticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesAutomaticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.apiServerAccess">api_server_access</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList">DataAzurermKubernetesAutomaticClusterApiServerAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.currentKubernetesVersion">current_kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dnsPrefix">dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fullyQualifiedDomainName">fully_qualified_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.hostedSystem">hosted_system</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList">DataAzurermKubernetesAutomaticClusterHostedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList">DataAzurermKubernetesAutomaticClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfig">kube_config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList">DataAzurermKubernetesAutomaticClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfigRaw">kube_config_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeletIdentity">kubelet_identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList">DataAzurermKubernetesAutomaticClusterKubeletIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroup">node_resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroupId">node_resource_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.portalFullyQualifiedDomainName">portal_fully_qualified_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateCluster">private_cluster</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList">DataAzurermKubernetesAutomaticClusterPrivateClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateFullyQualifiedDomainName">private_fully_qualified_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.serviceMesh">service_mesh</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList">DataAzurermKubernetesAutomaticClusterServiceMeshList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference">DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.webAppRoutingIngress">web_app_routing_ingress</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `api_server_access`<sup>Required</sup> <a name="api_server_access" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.apiServerAccess"></a>

```python
api_server_access: DataAzurermKubernetesAutomaticClusterApiServerAccessList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList">DataAzurermKubernetesAutomaticClusterApiServerAccessList</a>

---

##### `current_kubernetes_version`<sup>Required</sup> <a name="current_kubernetes_version" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.currentKubernetesVersion"></a>

```python
current_kubernetes_version: str
```

- *Type:* str

---

##### `dns_prefix`<sup>Required</sup> <a name="dns_prefix" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dnsPrefix"></a>

```python
dns_prefix: str
```

- *Type:* str

---

##### `fully_qualified_domain_name`<sup>Required</sup> <a name="fully_qualified_domain_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fullyQualifiedDomainName"></a>

```python
fully_qualified_domain_name: str
```

- *Type:* str

---

##### `hosted_system`<sup>Required</sup> <a name="hosted_system" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.hostedSystem"></a>

```python
hosted_system: DataAzurermKubernetesAutomaticClusterHostedSystemList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList">DataAzurermKubernetesAutomaticClusterHostedSystemList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.identity"></a>

```python
identity: DataAzurermKubernetesAutomaticClusterIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList">DataAzurermKubernetesAutomaticClusterIdentityList</a>

---

##### `kube_config`<sup>Required</sup> <a name="kube_config" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfig"></a>

```python
kube_config: DataAzurermKubernetesAutomaticClusterKubeConfigList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList">DataAzurermKubernetesAutomaticClusterKubeConfigList</a>

---

##### `kube_config_raw`<sup>Required</sup> <a name="kube_config_raw" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfigRaw"></a>

```python
kube_config_raw: str
```

- *Type:* str

---

##### `kubelet_identity`<sup>Required</sup> <a name="kubelet_identity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeletIdentity"></a>

```python
kubelet_identity: DataAzurermKubernetesAutomaticClusterKubeletIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList">DataAzurermKubernetesAutomaticClusterKubeletIdentityList</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `node_resource_group`<sup>Required</sup> <a name="node_resource_group" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroup"></a>

```python
node_resource_group: str
```

- *Type:* str

---

##### `node_resource_group_id`<sup>Required</sup> <a name="node_resource_group_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroupId"></a>

```python
node_resource_group_id: str
```

- *Type:* str

---

##### `portal_fully_qualified_domain_name`<sup>Required</sup> <a name="portal_fully_qualified_domain_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.portalFullyQualifiedDomainName"></a>

```python
portal_fully_qualified_domain_name: str
```

- *Type:* str

---

##### `private_cluster`<sup>Required</sup> <a name="private_cluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateCluster"></a>

```python
private_cluster: DataAzurermKubernetesAutomaticClusterPrivateClusterList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList">DataAzurermKubernetesAutomaticClusterPrivateClusterList</a>

---

##### `private_fully_qualified_domain_name`<sup>Required</sup> <a name="private_fully_qualified_domain_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateFullyQualifiedDomainName"></a>

```python
private_fully_qualified_domain_name: str
```

- *Type:* str

---

##### `service_mesh`<sup>Required</sup> <a name="service_mesh" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.serviceMesh"></a>

```python
service_mesh: DataAzurermKubernetesAutomaticClusterServiceMeshList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList">DataAzurermKubernetesAutomaticClusterServiceMeshList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeouts"></a>

```python
timeouts: DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference">DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference</a>

---

##### `web_app_routing_ingress`<sup>Required</sup> <a name="web_app_routing_ingress" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.webAppRoutingIngress"></a>

```python
web_app_routing_ingress: DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermKubernetesAutomaticClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesAutomaticClusterApiServerAccess <a name="DataAzurermKubernetesAutomaticClusterApiServerAccess" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess()
```


### DataAzurermKubernetesAutomaticClusterConfig <a name="DataAzurermKubernetesAutomaticClusterConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermKubernetesAutomaticClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKubernetesAutomaticClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#timeouts DataAzurermKubernetesAutomaticCluster#timeouts}

---

### DataAzurermKubernetesAutomaticClusterHostedSystem <a name="DataAzurermKubernetesAutomaticClusterHostedSystem" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem()
```


### DataAzurermKubernetesAutomaticClusterIdentity <a name="DataAzurermKubernetesAutomaticClusterIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity()
```


### DataAzurermKubernetesAutomaticClusterKubeConfig <a name="DataAzurermKubernetesAutomaticClusterKubeConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig()
```


### DataAzurermKubernetesAutomaticClusterKubeletIdentity <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity()
```


### DataAzurermKubernetesAutomaticClusterPrivateCluster <a name="DataAzurermKubernetesAutomaticClusterPrivateCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster()
```


### DataAzurermKubernetesAutomaticClusterServiceMesh <a name="DataAzurermKubernetesAutomaticClusterServiceMesh" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh()
```


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority()
```


### DataAzurermKubernetesAutomaticClusterTimeouts <a name="DataAzurermKubernetesAutomaticClusterTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}.

---

### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress()
```


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesAutomaticClusterApiServerAccessList <a name="DataAzurermKubernetesAutomaticClusterApiServerAccessList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference <a name="DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges">authorized_ip_ranges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess">DataAzurermKubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorized_ip_ranges`<sup>Required</sup> <a name="authorized_ip_ranges" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges"></a>

```python
authorized_ip_ranges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterApiServerAccess
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess">DataAzurermKubernetesAutomaticClusterApiServerAccess</a>

---


### DataAzurermKubernetesAutomaticClusterHostedSystemList <a name="DataAzurermKubernetesAutomaticClusterHostedSystemList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference <a name="DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId">node_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId">system_node_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem">DataAzurermKubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_subnet_id`<sup>Required</sup> <a name="node_subnet_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId"></a>

```python
node_subnet_id: str
```

- *Type:* str

---

##### `system_node_subnet_id`<sup>Required</sup> <a name="system_node_subnet_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId"></a>

```python
system_node_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterHostedSystem
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem">DataAzurermKubernetesAutomaticClusterHostedSystem</a>

---


### DataAzurermKubernetesAutomaticClusterIdentityList <a name="DataAzurermKubernetesAutomaticClusterIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity">DataAzurermKubernetesAutomaticClusterIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity">DataAzurermKubernetesAutomaticClusterIdentity</a>

---


### DataAzurermKubernetesAutomaticClusterKubeConfigList <a name="DataAzurermKubernetesAutomaticClusterKubeConfigList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference <a name="DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey">client_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig">DataAzurermKubernetesAutomaticClusterKubeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_certificate`<sup>Required</sup> <a name="client_certificate" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_key`<sup>Required</sup> <a name="client_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

---

##### `cluster_ca_certificate`<sup>Required</sup> <a name="cluster_ca_certificate" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterKubeConfig
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig">DataAzurermKubernetesAutomaticClusterKubeConfig</a>

---


### DataAzurermKubernetesAutomaticClusterKubeletIdentityList <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity">DataAzurermKubernetesAutomaticClusterKubeletIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterKubeletIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity">DataAzurermKubernetesAutomaticClusterKubeletIdentity</a>

---


### DataAzurermKubernetesAutomaticClusterPrivateClusterList <a name="DataAzurermKubernetesAutomaticClusterPrivateClusterList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference <a name="DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId">private_dns_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled">public_fully_qualified_domain_name_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster">DataAzurermKubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_dns_zone_id`<sup>Required</sup> <a name="private_dns_zone_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId"></a>

```python
private_dns_zone_id: str
```

- *Type:* str

---

##### `public_fully_qualified_domain_name_enabled`<sup>Required</sup> <a name="public_fully_qualified_domain_name_enabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled"></a>

```python
public_fully_qualified_domain_name_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterPrivateCluster
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster">DataAzurermKubernetesAutomaticClusterPrivateCluster</a>

---


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName">certificate_chain_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName">certificate_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName">key_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName">root_certificate_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_chain_object_name`<sup>Required</sup> <a name="certificate_chain_object_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName"></a>

```python
certificate_chain_object_name: str
```

- *Type:* str

---

##### `certificate_object_name`<sup>Required</sup> <a name="certificate_object_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName"></a>

```python
certificate_object_name: str
```

- *Type:* str

---

##### `key_object_name`<sup>Required</sup> <a name="key_object_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName"></a>

```python
key_object_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `root_certificate_object_name`<sup>Required</sup> <a name="root_certificate_object_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName"></a>

```python
root_certificate_object_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---


### DataAzurermKubernetesAutomaticClusterServiceMeshList <a name="DataAzurermKubernetesAutomaticClusterServiceMeshList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference <a name="DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority">certificate_authority</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled">external_ingress_gateway_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled">internal_ingress_gateway_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism">proxy_redirect_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.revisions">revisions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh">DataAzurermKubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority`<sup>Required</sup> <a name="certificate_authority" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority"></a>

```python
certificate_authority: DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList</a>

---

##### `external_ingress_gateway_enabled`<sup>Required</sup> <a name="external_ingress_gateway_enabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled"></a>

```python
external_ingress_gateway_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_ingress_gateway_enabled`<sup>Required</sup> <a name="internal_ingress_gateway_enabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled"></a>

```python
internal_ingress_gateway_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `proxy_redirect_mechanism`<sup>Required</sup> <a name="proxy_redirect_mechanism" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism"></a>

```python
proxy_redirect_mechanism: str
```

- *Type:* str

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.revisions"></a>

```python
revisions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterServiceMesh
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh">DataAzurermKubernetesAutomaticClusterServiceMesh</a>

---


### DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference <a name="DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermKubernetesAutomaticClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController">default_nginx_controller</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds">dns_zone_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled">istio_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity">web_app_routing_identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_nginx_controller`<sup>Required</sup> <a name="default_nginx_controller" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController"></a>

```python
default_nginx_controller: str
```

- *Type:* str

---

##### `dns_zone_ids`<sup>Required</sup> <a name="dns_zone_ids" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds"></a>

```python
dns_zone_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `istio_enabled`<sup>Required</sup> <a name="istio_enabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled"></a>

```python
istio_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `web_app_routing_identity`<sup>Required</sup> <a name="web_app_routing_identity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity"></a>

```python
web_app_routing_identity: DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress</a>

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_kubernetes_automatic_cluster

dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a>

---



