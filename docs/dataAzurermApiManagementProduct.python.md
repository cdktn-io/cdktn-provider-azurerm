# `dataAzurermApiManagementProduct` Submodule <a name="`dataAzurermApiManagementProduct` Submodule" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermApiManagementProduct <a name="DataAzurermApiManagementProduct" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product azurerm_api_management_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProduct(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_name: str,
  product_id: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermApiManagementProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#api_management_name DataAzurermApiManagementProduct#api_management_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#product_id DataAzurermApiManagementProduct#product_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#resource_group_name DataAzurermApiManagementProduct#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#id DataAzurermApiManagementProduct#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#api_management_name DataAzurermApiManagementProduct#api_management_name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.productId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#product_id DataAzurermApiManagementProduct#product_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#resource_group_name DataAzurermApiManagementProduct#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#id DataAzurermApiManagementProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#timeouts DataAzurermApiManagementProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#read DataAzurermApiManagementProduct#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermApiManagementProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermApiManagementProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermApiManagementProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermApiManagementProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermApiManagementProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.approvalRequired">approval_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.published">published</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.subscriptionRequired">subscription_required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.subscriptionsLimit">subscriptions_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terms">terms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference">DataAzurermApiManagementProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.productIdInput">product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `approval_required`<sup>Required</sup> <a name="approval_required" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.approvalRequired"></a>

```python
approval_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.published"></a>

```python
published: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `subscription_required`<sup>Required</sup> <a name="subscription_required" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.subscriptionRequired"></a>

```python
subscription_required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `subscriptions_limit`<sup>Required</sup> <a name="subscriptions_limit" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.subscriptionsLimit"></a>

```python
subscriptions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.terms"></a>

```python
terms: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.timeouts"></a>

```python
timeouts: DataAzurermApiManagementProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference">DataAzurermApiManagementProductTimeoutsOutputReference</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `product_id_input`<sup>Optional</sup> <a name="product_id_input" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.productIdInput"></a>

```python
product_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermApiManagementProductTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a>

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermApiManagementProductConfig <a name="DataAzurermApiManagementProductConfig" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_management_name: str,
  product_id: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermApiManagementProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#api_management_name DataAzurermApiManagementProduct#api_management_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.productId">product_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#product_id DataAzurermApiManagementProduct#product_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#resource_group_name DataAzurermApiManagementProduct#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#id DataAzurermApiManagementProduct#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#api_management_name DataAzurermApiManagementProduct#api_management_name}.

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.productId"></a>

```python
product_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#product_id DataAzurermApiManagementProduct#product_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#resource_group_name DataAzurermApiManagementProduct#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#id DataAzurermApiManagementProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductConfig.property.timeouts"></a>

```python
timeouts: DataAzurermApiManagementProductTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#timeouts DataAzurermApiManagementProduct#timeouts}

---

### DataAzurermApiManagementProductTimeouts <a name="DataAzurermApiManagementProductTimeouts" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#read DataAzurermApiManagementProduct#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/api_management_product#read DataAzurermApiManagementProduct#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermApiManagementProductTimeoutsOutputReference <a name="DataAzurermApiManagementProductTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_api_management_product

dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermApiManagementProductTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermApiManagementProduct.DataAzurermApiManagementProductTimeouts">DataAzurermApiManagementProductTimeouts</a>

---



