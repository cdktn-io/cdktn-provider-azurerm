# `dataAzurermKeyVaultCertificates` Submodule <a name="`dataAzurermKeyVaultCertificates` Submodule" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificates <a name="DataAzurermKeyVaultCertificates" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates azurerm_key_vault_certificates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_vault_id: str,
  id: str = None,
  include_pending: bool | IResolvable = None,
  timeouts: DataAzurermKeyVaultCertificatesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.includePending">include_pending</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_pending`<sup>Optional</sup> <a name="include_pending" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.includePending"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#timeouts DataAzurermKeyVaultCertificates#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetIncludePending">reset_include_pending</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_pending` <a name="reset_include_pending" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetIncludePending"></a>

```python
def reset_include_pending() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermKeyVaultCertificates resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermKeyVaultCertificates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermKeyVaultCertificates to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermKeyVaultCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList">DataAzurermKeyVaultCertificatesCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference">DataAzurermKeyVaultCertificatesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePendingInput">include_pending_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePending">include_pending</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.certificates"></a>

```python
certificates: DataAzurermKeyVaultCertificatesCertificatesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList">DataAzurermKeyVaultCertificatesCertificatesList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificatesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference">DataAzurermKeyVaultCertificatesTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_pending_input`<sup>Optional</sup> <a name="include_pending_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePendingInput"></a>

```python
include_pending_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermKeyVaultCertificatesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_pending`<sup>Required</sup> <a name="include_pending" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePending"></a>

```python
include_pending: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificatesCertificates <a name="DataAzurermKeyVaultCertificatesCertificates" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates()
```


### DataAzurermKeyVaultCertificatesConfig <a name="DataAzurermKeyVaultCertificatesConfig" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key_vault_id: str,
  id: str = None,
  include_pending: bool | IResolvable = None,
  timeouts: DataAzurermKeyVaultCertificatesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.includePending">include_pending</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_pending`<sup>Optional</sup> <a name="include_pending" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.includePending"></a>

```python
include_pending: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.timeouts"></a>

```python
timeouts: DataAzurermKeyVaultCertificatesTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#timeouts DataAzurermKeyVaultCertificates#timeouts}

---

### DataAzurermKeyVaultCertificatesTimeouts <a name="DataAzurermKeyVaultCertificatesTimeouts" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificatesCertificatesList <a name="DataAzurermKeyVaultCertificatesCertificatesList" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermKeyVaultCertificatesCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermKeyVaultCertificatesCertificatesOutputReference <a name="DataAzurermKeyVaultCertificatesCertificatesOutputReference" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates">DataAzurermKeyVaultCertificatesCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermKeyVaultCertificatesCertificates
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates">DataAzurermKeyVaultCertificatesCertificates</a>

---


### DataAzurermKeyVaultCertificatesTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificatesTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_key_vault_certificates

dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermKeyVaultCertificatesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

---



