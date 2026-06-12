# `dataAzurermCdnFrontdoorSecurityPolicy` Submodule <a name="`dataAzurermCdnFrontdoorSecurityPolicy` Submodule" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorSecurityPolicy <a name="DataAzurermCdnFrontdoorSecurityPolicy" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy azurerm_cdn_frontdoor_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy(
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
  profile_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorSecurityPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#name DataAzurermCdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#profile_name DataAzurermCdnFrontdoorSecurityPolicy#profile_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#resource_group_name DataAzurermCdnFrontdoorSecurityPolicy#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#id DataAzurermCdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#name DataAzurermCdnFrontdoorSecurityPolicy#name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#profile_name DataAzurermCdnFrontdoorSecurityPolicy#profile_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#resource_group_name DataAzurermCdnFrontdoorSecurityPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#id DataAzurermCdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#timeouts DataAzurermCdnFrontdoorSecurityPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#read DataAzurermCdnFrontdoorSecurityPolicy#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAzurermCdnFrontdoorSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isConstruct"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isTerraformDataSource"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAzurermCdnFrontdoorSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermCdnFrontdoorSecurityPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermCdnFrontdoorSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermCdnFrontdoorSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId">cdn_frontdoor_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.securityPolicies">security_policies</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference">DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cdn_frontdoor_profile_id`<sup>Required</sup> <a name="cdn_frontdoor_profile_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.cdnFrontdoorProfileId"></a>

```python
cdn_frontdoor_profile_id: str
```

- *Type:* str

---

##### `security_policies`<sup>Required</sup> <a name="security_policies" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.securityPolicies"></a>

```python
security_policies: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference">DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermCdnFrontdoorSecurityPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorSecurityPolicyConfig <a name="DataAzurermCdnFrontdoorSecurityPolicyConfig" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  profile_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermCdnFrontdoorSecurityPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#name DataAzurermCdnFrontdoorSecurityPolicy#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#profile_name DataAzurermCdnFrontdoorSecurityPolicy#profile_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#resource_group_name DataAzurermCdnFrontdoorSecurityPolicy#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#id DataAzurermCdnFrontdoorSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#name DataAzurermCdnFrontdoorSecurityPolicy#name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#profile_name DataAzurermCdnFrontdoorSecurityPolicy#profile_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#resource_group_name DataAzurermCdnFrontdoorSecurityPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#id DataAzurermCdnFrontdoorSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCdnFrontdoorSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#timeouts DataAzurermCdnFrontdoorSecurityPolicy#timeouts}

---

### DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies()
```


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall()
```


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation()
```


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain()
```


### DataAzurermCdnFrontdoorSecurityPolicyTimeouts <a name="DataAzurermCdnFrontdoorSecurityPolicyTimeouts" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#read DataAzurermCdnFrontdoorSecurityPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/cdn_frontdoor_security_policy#read DataAzurermCdnFrontdoorSecurityPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active">active</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId">cdn_frontdoor_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.active"></a>

```python
active: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cdn_frontdoor_domain_id`<sup>Required</sup> <a name="cdn_frontdoor_domain_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.cdnFrontdoorDomainId"></a>

```python
cdn_frontdoor_domain_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain</a>

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain">domain</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch">patterns_to_match</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.domain"></a>

```python
domain: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList</a>

---

##### `patterns_to_match`<sup>Required</sup> <a name="patterns_to_match" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.patternsToMatch"></a>

```python
patterns_to_match: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation</a>

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association">association</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId">cdn_frontdoor_firewall_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association`<sup>Required</sup> <a name="association" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.association"></a>

```python
association: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList</a>

---

##### `cdn_frontdoor_firewall_policy_id`<sup>Required</sup> <a name="cdn_frontdoor_firewall_policy_id" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.cdnFrontdoorFirewallPolicyId"></a>

```python
cdn_frontdoor_firewall_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewall</a>

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference <a name="DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies">DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.firewall"></a>

```python
firewall: DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList">DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesFirewallList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies">DataAzurermCdnFrontdoorSecurityPolicySecurityPolicies</a>

---


### DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import data_azurerm_cdn_frontdoor_security_policy

dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermCdnFrontdoorSecurityPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermCdnFrontdoorSecurityPolicy.DataAzurermCdnFrontdoorSecurityPolicyTimeouts">DataAzurermCdnFrontdoorSecurityPolicyTimeouts</a>

---



