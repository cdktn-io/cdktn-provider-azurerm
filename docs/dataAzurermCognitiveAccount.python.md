# `dataAzurermCognitiveAccount` Submodule <a name="`dataAzurermCognitiveAccount` Submodule" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCognitiveAccount <a name="DataAzurermCognitiveAccount" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account azurerm_cognitive_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount(
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
  tags: typing.Mapping[str] = None,
  timeouts: DataAzurermCognitiveAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#timeouts DataAzurermCognitiveAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermCognitiveAccount resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermCognitiveAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermCognitiveAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermCognitiveAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCognitiveAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList">DataAzurermCognitiveAccountCustomerManagedKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customQuestionAnsweringSearchServiceId">custom_question_answering_search_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customSubdomainName">custom_subdomain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dynamicThrottlingEnabled">dynamic_throttling_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqdns">fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList">DataAzurermCognitiveAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.localAuthEnabled">local_auth_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadClientId">metrics_advisor_aad_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadTenantId">metrics_advisor_aad_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorSuperUserName">metrics_advisor_super_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorWebsiteName">metrics_advisor_website_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkAcls">network_acls</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList">DataAzurermCognitiveAccountNetworkAclsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkInjection">network_injection</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList">DataAzurermCognitiveAccountNetworkInjectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.outboundNetworkAccessRestricted">outbound_network_access_restricted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.projectManagementEnabled">project_management_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.qnaRuntimeEndpoint">qna_runtime_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList">DataAzurermCognitiveAccountStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference">DataAzurermCognitiveAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customerManagedKey"></a>

```python
customer_managed_key: DataAzurermCognitiveAccountCustomerManagedKeyList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList">DataAzurermCognitiveAccountCustomerManagedKeyList</a>

---

##### `custom_question_answering_search_service_id`<sup>Required</sup> <a name="custom_question_answering_search_service_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customQuestionAnsweringSearchServiceId"></a>

```python
custom_question_answering_search_service_id: str
```

- *Type:* str

---

##### `custom_subdomain_name`<sup>Required</sup> <a name="custom_subdomain_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.customSubdomainName"></a>

```python
custom_subdomain_name: str
```

- *Type:* str

---

##### `dynamic_throttling_enabled`<sup>Required</sup> <a name="dynamic_throttling_enabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.dynamicThrottlingEnabled"></a>

```python
dynamic_throttling_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.fqdns"></a>

```python
fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.identity"></a>

```python
identity: DataAzurermCognitiveAccountIdentityList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList">DataAzurermCognitiveAccountIdentityList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `local_auth_enabled`<sup>Required</sup> <a name="local_auth_enabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.localAuthEnabled"></a>

```python
local_auth_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metrics_advisor_aad_client_id`<sup>Required</sup> <a name="metrics_advisor_aad_client_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadClientId"></a>

```python
metrics_advisor_aad_client_id: str
```

- *Type:* str

---

##### `metrics_advisor_aad_tenant_id`<sup>Required</sup> <a name="metrics_advisor_aad_tenant_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorAadTenantId"></a>

```python
metrics_advisor_aad_tenant_id: str
```

- *Type:* str

---

##### `metrics_advisor_super_user_name`<sup>Required</sup> <a name="metrics_advisor_super_user_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorSuperUserName"></a>

```python
metrics_advisor_super_user_name: str
```

- *Type:* str

---

##### `metrics_advisor_website_name`<sup>Required</sup> <a name="metrics_advisor_website_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.metricsAdvisorWebsiteName"></a>

```python
metrics_advisor_website_name: str
```

- *Type:* str

---

##### `network_acls`<sup>Required</sup> <a name="network_acls" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkAcls"></a>

```python
network_acls: DataAzurermCognitiveAccountNetworkAclsList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList">DataAzurermCognitiveAccountNetworkAclsList</a>

---

##### `network_injection`<sup>Required</sup> <a name="network_injection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.networkInjection"></a>

```python
network_injection: DataAzurermCognitiveAccountNetworkInjectionList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList">DataAzurermCognitiveAccountNetworkInjectionList</a>

---

##### `outbound_network_access_restricted`<sup>Required</sup> <a name="outbound_network_access_restricted" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.outboundNetworkAccessRestricted"></a>

```python
outbound_network_access_restricted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `project_management_enabled`<sup>Required</sup> <a name="project_management_enabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.projectManagementEnabled"></a>

```python
project_management_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `qna_runtime_endpoint`<sup>Required</sup> <a name="qna_runtime_endpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.qnaRuntimeEndpoint"></a>

```python
qna_runtime_endpoint: str
```

- *Type:* str

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.storage"></a>

```python
storage: DataAzurermCognitiveAccountStorageList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList">DataAzurermCognitiveAccountStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeouts"></a>

```python
timeouts: DataAzurermCognitiveAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference">DataAzurermCognitiveAccountTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermCognitiveAccountTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCognitiveAccountConfig <a name="DataAzurermCognitiveAccountConfig" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig(
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
  tags: typing.Mapping[str] = None,
  timeouts: DataAzurermCognitiveAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#name DataAzurermCognitiveAccount#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#resource_group_name DataAzurermCognitiveAccount#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#id DataAzurermCognitiveAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#tags DataAzurermCognitiveAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCognitiveAccountTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#timeouts DataAzurermCognitiveAccount#timeouts}

---

### DataAzurermCognitiveAccountCustomerManagedKey <a name="DataAzurermCognitiveAccountCustomerManagedKey" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey()
```


### DataAzurermCognitiveAccountIdentity <a name="DataAzurermCognitiveAccountIdentity" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity()
```


### DataAzurermCognitiveAccountNetworkAcls <a name="DataAzurermCognitiveAccountNetworkAcls" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls()
```


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules()
```


### DataAzurermCognitiveAccountNetworkInjection <a name="DataAzurermCognitiveAccountNetworkInjection" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection()
```


### DataAzurermCognitiveAccountStorage <a name="DataAzurermCognitiveAccountStorage" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage()
```


### DataAzurermCognitiveAccountTimeouts <a name="DataAzurermCognitiveAccountTimeouts" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/cognitive_account#read DataAzurermCognitiveAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCognitiveAccountCustomerManagedKeyList <a name="DataAzurermCognitiveAccountCustomerManagedKeyList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCognitiveAccountCustomerManagedKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCognitiveAccountCustomerManagedKeyOutputReference <a name="DataAzurermCognitiveAccountCustomerManagedKeyOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId">identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey">DataAzurermCognitiveAccountCustomerManagedKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_client_id`<sup>Required</sup> <a name="identity_client_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKeyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCognitiveAccountCustomerManagedKey
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountCustomerManagedKey">DataAzurermCognitiveAccountCustomerManagedKey</a>

---


### DataAzurermCognitiveAccountIdentityList <a name="DataAzurermCognitiveAccountIdentityList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCognitiveAccountIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCognitiveAccountIdentityOutputReference <a name="DataAzurermCognitiveAccountIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity">DataAzurermCognitiveAccountIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCognitiveAccountIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountIdentity">DataAzurermCognitiveAccountIdentity</a>

---


### DataAzurermCognitiveAccountNetworkAclsList <a name="DataAzurermCognitiveAccountNetworkAclsList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCognitiveAccountNetworkAclsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCognitiveAccountNetworkAclsOutputReference <a name="DataAzurermCognitiveAccountNetworkAclsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.bypass">bypass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.ipRules">ip_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules">virtual_network_rules</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls">DataAzurermCognitiveAccountNetworkAcls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass`<sup>Required</sup> <a name="bypass" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.bypass"></a>

```python
bypass: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `ip_rules`<sup>Required</sup> <a name="ip_rules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.ipRules"></a>

```python
ip_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_network_rules`<sup>Required</sup> <a name="virtual_network_rules" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.virtualNetworkRules"></a>

```python
virtual_network_rules: DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCognitiveAccountNetworkAcls
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAcls">DataAzurermCognitiveAccountNetworkAcls</a>

---


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference <a name="DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint`<sup>Required</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules">DataAzurermCognitiveAccountNetworkAclsVirtualNetworkRules</a>

---


### DataAzurermCognitiveAccountNetworkInjectionList <a name="DataAzurermCognitiveAccountNetworkInjectionList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCognitiveAccountNetworkInjectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCognitiveAccountNetworkInjectionOutputReference <a name="DataAzurermCognitiveAccountNetworkInjectionOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.scenario">scenario</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection">DataAzurermCognitiveAccountNetworkInjection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scenario`<sup>Required</sup> <a name="scenario" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.scenario"></a>

```python
scenario: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCognitiveAccountNetworkInjection
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountNetworkInjection">DataAzurermCognitiveAccountNetworkInjection</a>

---


### DataAzurermCognitiveAccountStorageList <a name="DataAzurermCognitiveAccountStorageList" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCognitiveAccountStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCognitiveAccountStorageOutputReference <a name="DataAzurermCognitiveAccountStorageOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.identityClientId">identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage">DataAzurermCognitiveAccountStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_client_id`<sup>Required</sup> <a name="identity_client_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.identityClientId"></a>

```python
identity_client_id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCognitiveAccountStorage
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountStorage">DataAzurermCognitiveAccountStorage</a>

---


### DataAzurermCognitiveAccountTimeoutsOutputReference <a name="DataAzurermCognitiveAccountTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cognitive_account

dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermCognitiveAccountTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCognitiveAccount.DataAzurermCognitiveAccountTimeouts">DataAzurermCognitiveAccountTimeouts</a>

---



