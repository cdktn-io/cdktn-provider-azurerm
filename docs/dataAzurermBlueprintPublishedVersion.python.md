# `dataAzurermBlueprintPublishedVersion` Submodule <a name="`dataAzurermBlueprintPublishedVersion` Submodule" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBlueprintPublishedVersion <a name="DataAzurermBlueprintPublishedVersion" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version azurerm_blueprint_published_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  blueprint_name: str,
  scope_id: str,
  version: str,
  id: str = None,
  timeouts: DataAzurermBlueprintPublishedVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.blueprintName">blueprint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blueprint_name`<sup>Required</sup> <a name="blueprint_name" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.blueprintName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}.

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.scopeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#timeouts DataAzurermBlueprintPublishedVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermBlueprintPublishedVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermBlueprintPublishedVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermBlueprintPublishedVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermBlueprintPublishedVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermBlueprintPublishedVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.targetScope">target_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference">DataAzurermBlueprintPublishedVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintNameInput">blueprint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintName">blueprint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `target_scope`<sup>Required</sup> <a name="target_scope" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.targetScope"></a>

```python
target_scope: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeouts"></a>

```python
timeouts: DataAzurermBlueprintPublishedVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference">DataAzurermBlueprintPublishedVersionTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `blueprint_name_input`<sup>Optional</sup> <a name="blueprint_name_input" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintNameInput"></a>

```python
blueprint_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermBlueprintPublishedVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `blueprint_name`<sup>Required</sup> <a name="blueprint_name" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.blueprintName"></a>

```python
blueprint_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBlueprintPublishedVersionConfig <a name="DataAzurermBlueprintPublishedVersionConfig" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  blueprint_name: str,
  scope_id: str,
  version: str,
  id: str = None,
  timeouts: DataAzurermBlueprintPublishedVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.blueprintName">blueprint_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.scopeId">scope_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blueprint_name`<sup>Required</sup> <a name="blueprint_name" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.blueprintName"></a>

```python
blueprint_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#blueprint_name DataAzurermBlueprintPublishedVersion#blueprint_name}.

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#scope_id DataAzurermBlueprintPublishedVersion#scope_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#version DataAzurermBlueprintPublishedVersion#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#id DataAzurermBlueprintPublishedVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermBlueprintPublishedVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#timeouts DataAzurermBlueprintPublishedVersion#timeouts}

---

### DataAzurermBlueprintPublishedVersionTimeouts <a name="DataAzurermBlueprintPublishedVersionTimeouts" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/blueprint_published_version#read DataAzurermBlueprintPublishedVersion#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBlueprintPublishedVersionTimeoutsOutputReference <a name="DataAzurermBlueprintPublishedVersionTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_blueprint_published_version

dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermBlueprintPublishedVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermBlueprintPublishedVersion.DataAzurermBlueprintPublishedVersionTimeouts">DataAzurermBlueprintPublishedVersionTimeouts</a>

---



