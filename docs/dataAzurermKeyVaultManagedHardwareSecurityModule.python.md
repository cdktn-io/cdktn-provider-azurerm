# `dataAzurermKeyVaultManagedHardwareSecurityModule` Submodule <a name="`dataAzurermKeyVaultManagedHardwareSecurityModule` Submodule" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModule <a name="DataAzurermKeyVaultManagedHardwareSecurityModule" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module azurerm_key_vault_managed_hardware_security_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule(
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
  timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#name DataAzurermKeyVaultManagedHardwareSecurityModule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#resource_group_name DataAzurermKeyVaultManagedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#id DataAzurermKeyVaultManagedHardwareSecurityModule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#name DataAzurermKeyVaultManagedHardwareSecurityModule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#resource_group_name DataAzurermKeyVaultManagedHardwareSecurityModule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#id DataAzurermKeyVaultManagedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#timeouts DataAzurermKeyVaultManagedHardwareSecurityModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#read DataAzurermKeyVaultManagedHardwareSecurityModule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermKeyVaultManagedHardwareSecurityModule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermKeyVaultManagedHardwareSecurityModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKeyVaultManagedHardwareSecurityModule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKeyVaultManagedHardwareSecurityModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultManagedHardwareSecurityModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.adminObjectIds">admin_object_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.hsmUri">hsm_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabled">purge_protection_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDays">soft_delete_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `admin_object_ids`<sup>Required</sup> <a name="admin_object_ids" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.adminObjectIds"></a>

```python
admin_object_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hsm_uri`<sup>Required</sup> <a name="hsm_uri" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.hsmUri"></a>

```python
hsm_uri: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `purge_protection_enabled`<sup>Required</sup> <a name="purge_protection_enabled" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.purgeProtectionEnabled"></a>

```python
purge_protection_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `soft_delete_retention_days`<sup>Required</sup> <a name="soft_delete_retention_days" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.softDeleteRetentionDays"></a>

```python
soft_delete_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleConfig <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleConfig" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig(
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
  timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#name DataAzurermKeyVaultManagedHardwareSecurityModule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#resource_group_name DataAzurermKeyVaultManagedHardwareSecurityModule#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#id DataAzurermKeyVaultManagedHardwareSecurityModule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#name DataAzurermKeyVaultManagedHardwareSecurityModule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#resource_group_name DataAzurermKeyVaultManagedHardwareSecurityModule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#id DataAzurermKeyVaultManagedHardwareSecurityModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#timeouts DataAzurermKeyVaultManagedHardwareSecurityModule#timeouts}

---

### DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#read DataAzurermKeyVaultManagedHardwareSecurityModule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/key_vault_managed_hardware_security_module#read DataAzurermKeyVaultManagedHardwareSecurityModule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_managed_hardware_security_module

dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModule.DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleTimeouts</a>

---



