# `dataAzurermPublicIp` Submodule <a name="`dataAzurermPublicIp` Submodule" id="@cdktn/provider-azurerm.dataAzurermPublicIp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPublicIp <a name="DataAzurermPublicIp" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip azurerm_public_ip}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIp(
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
  timeouts: DataAzurermPublicIpTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#name DataAzurermPublicIp#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#resource_group_name DataAzurermPublicIp#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#id DataAzurermPublicIp#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#name DataAzurermPublicIp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#resource_group_name DataAzurermPublicIp#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#id DataAzurermPublicIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#timeouts DataAzurermPublicIp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#read DataAzurermPublicIp#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermPublicIp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIp.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermPublicIp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPublicIp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPublicIp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermPublicIp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.allocationMethod">allocation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ddosProtectionMode">ddos_protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ddosProtectionPlanId">ddos_protection_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.domainNameLabel">domain_name_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.idleTimeoutInMinutes">idle_timeout_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ipTags">ip_tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.reverseFqdn">reverse_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference">DataAzurermPublicIpTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allocation_method`<sup>Required</sup> <a name="allocation_method" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.allocationMethod"></a>

```python
allocation_method: str
```

- *Type:* str

---

##### `ddos_protection_mode`<sup>Required</sup> <a name="ddos_protection_mode" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ddosProtectionMode"></a>

```python
ddos_protection_mode: str
```

- *Type:* str

---

##### `ddos_protection_plan_id`<sup>Required</sup> <a name="ddos_protection_plan_id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ddosProtectionPlanId"></a>

```python
ddos_protection_plan_id: str
```

- *Type:* str

---

##### `domain_name_label`<sup>Required</sup> <a name="domain_name_label" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.domainNameLabel"></a>

```python
domain_name_label: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `idle_timeout_in_minutes`<sup>Required</sup> <a name="idle_timeout_in_minutes" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.idleTimeoutInMinutes"></a>

```python
idle_timeout_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_tags`<sup>Required</sup> <a name="ip_tags" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ipTags"></a>

```python
ip_tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `reverse_fqdn`<sup>Required</sup> <a name="reverse_fqdn" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.reverseFqdn"></a>

```python
reverse_fqdn: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.timeouts"></a>

```python
timeouts: DataAzurermPublicIpTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference">DataAzurermPublicIpTimeoutsOutputReference</a>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermPublicIpTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPublicIpConfig <a name="DataAzurermPublicIpConfig" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIpConfig(
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
  timeouts: DataAzurermPublicIpTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#name DataAzurermPublicIp#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#resource_group_name DataAzurermPublicIp#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#id DataAzurermPublicIp#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#name DataAzurermPublicIp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#resource_group_name DataAzurermPublicIp#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#id DataAzurermPublicIp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPublicIpTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#timeouts DataAzurermPublicIp#timeouts}

---

### DataAzurermPublicIpTimeouts <a name="DataAzurermPublicIpTimeouts" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIpTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#read DataAzurermPublicIp#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/public_ip#read DataAzurermPublicIp#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPublicIpTimeoutsOutputReference <a name="DataAzurermPublicIpTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_public_ip

dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermPublicIpTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPublicIp.DataAzurermPublicIpTimeouts">DataAzurermPublicIpTimeouts</a>

---



