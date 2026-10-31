# `dataAzurermStorageAccountStaticWebsite` Submodule <a name="`dataAzurermStorageAccountStaticWebsite` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountStaticWebsite <a name="DataAzurermStorageAccountStaticWebsite" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website azurerm_storage_account_static_website}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_account_id: str,
  id: str = None,
  timeouts: DataAzurermStorageAccountStaticWebsiteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#storage_account_id DataAzurermStorageAccountStaticWebsite#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#id DataAzurermStorageAccountStaticWebsite#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.storageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#storage_account_id DataAzurermStorageAccountStaticWebsite#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#id DataAzurermStorageAccountStaticWebsite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#timeouts DataAzurermStorageAccountStaticWebsite#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#read DataAzurermStorageAccountStaticWebsite#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermStorageAccountStaticWebsite resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermStorageAccountStaticWebsite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermStorageAccountStaticWebsite to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermStorageAccountStaticWebsite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccountStaticWebsite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.error404Document">error404_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference">DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountIdInput">storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `error404_document`<sup>Required</sup> <a name="error404_document" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.error404Document"></a>

```python
error404_document: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeouts"></a>

```python
timeouts: DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference">DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `storage_account_id_input`<sup>Optional</sup> <a name="storage_account_id_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountIdInput"></a>

```python
storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermStorageAccountStaticWebsiteTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountStaticWebsiteConfig <a name="DataAzurermStorageAccountStaticWebsiteConfig" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_account_id: str,
  id: str = None,
  timeouts: DataAzurermStorageAccountStaticWebsiteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.storageAccountId">storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#storage_account_id DataAzurermStorageAccountStaticWebsite#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#id DataAzurermStorageAccountStaticWebsite#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_account_id`<sup>Required</sup> <a name="storage_account_id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.storageAccountId"></a>

```python
storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#storage_account_id DataAzurermStorageAccountStaticWebsite#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#id DataAzurermStorageAccountStaticWebsite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.timeouts"></a>

```python
timeouts: DataAzurermStorageAccountStaticWebsiteTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#timeouts DataAzurermStorageAccountStaticWebsite#timeouts}

---

### DataAzurermStorageAccountStaticWebsiteTimeouts <a name="DataAzurermStorageAccountStaticWebsiteTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#read DataAzurermStorageAccountStaticWebsite#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#read DataAzurermStorageAccountStaticWebsite#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference <a name="DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_storage_account_static_website

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermStorageAccountStaticWebsiteTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

---



