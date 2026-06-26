# `networkSecurityPerimeterAssociation` Submodule <a name="`networkSecurityPerimeterAssociation` Submodule" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityPerimeterAssociation <a name="NetworkSecurityPerimeterAssociation" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association azurerm_network_security_perimeter_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_mode: str,
  name: str,
  network_security_perimeter_profile_id: str,
  resource_id: str,
  id: str = None,
  timeouts: NetworkSecurityPerimeterAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.accessMode">access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.networkSecurityPerimeterProfileId">network_security_perimeter_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.accessMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}.

---

##### `network_security_perimeter_profile_id`<sup>Required</sup> <a name="network_security_perimeter_profile_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.networkSecurityPerimeterProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#timeouts NetworkSecurityPerimeterAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#create NetworkSecurityPerimeterAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#delete NetworkSecurityPerimeterAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#read NetworkSecurityPerimeterAssociation#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#update NetworkSecurityPerimeterAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkSecurityPerimeterAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isConstruct"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkSecurityPerimeterAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityPerimeterAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityPerimeterAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkSecurityPerimeterAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference">NetworkSecurityPerimeterAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessModeInput">access_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileIdInput">network_security_perimeter_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessMode">access_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileId">network_security_perimeter_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeouts"></a>

```python
timeouts: NetworkSecurityPerimeterAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference">NetworkSecurityPerimeterAssociationTimeoutsOutputReference</a>

---

##### `access_mode_input`<sup>Optional</sup> <a name="access_mode_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessModeInput"></a>

```python
access_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_security_perimeter_profile_id_input`<sup>Optional</sup> <a name="network_security_perimeter_profile_id_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileIdInput"></a>

```python
network_security_perimeter_profile_id_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetworkSecurityPerimeterAssociationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_security_perimeter_profile_id`<sup>Required</sup> <a name="network_security_perimeter_profile_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.networkSecurityPerimeterProfileId"></a>

```python
network_security_perimeter_profile_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityPerimeterAssociationConfig <a name="NetworkSecurityPerimeterAssociationConfig" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_mode: str,
  name: str,
  network_security_perimeter_profile_id: str,
  resource_id: str,
  id: str = None,
  timeouts: NetworkSecurityPerimeterAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.accessMode">access_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.networkSecurityPerimeterProfileId">network_security_perimeter_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_mode`<sup>Required</sup> <a name="access_mode" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.accessMode"></a>

```python
access_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#access_mode NetworkSecurityPerimeterAssociation#access_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#name NetworkSecurityPerimeterAssociation#name}.

---

##### `network_security_perimeter_profile_id`<sup>Required</sup> <a name="network_security_perimeter_profile_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.networkSecurityPerimeterProfileId"></a>

```python
network_security_perimeter_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#network_security_perimeter_profile_id NetworkSecurityPerimeterAssociation#network_security_perimeter_profile_id}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#resource_id NetworkSecurityPerimeterAssociation#resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#id NetworkSecurityPerimeterAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkSecurityPerimeterAssociationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#timeouts NetworkSecurityPerimeterAssociation#timeouts}

---

### NetworkSecurityPerimeterAssociationTimeouts <a name="NetworkSecurityPerimeterAssociationTimeouts" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#create NetworkSecurityPerimeterAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#delete NetworkSecurityPerimeterAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#read NetworkSecurityPerimeterAssociation#read}. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#update NetworkSecurityPerimeterAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#create NetworkSecurityPerimeterAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#delete NetworkSecurityPerimeterAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#read NetworkSecurityPerimeterAssociation#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_security_perimeter_association#update NetworkSecurityPerimeterAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityPerimeterAssociationTimeoutsOutputReference <a name="NetworkSecurityPerimeterAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import network_security_perimeter_association

networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkSecurityPerimeterAssociationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.networkSecurityPerimeterAssociation.NetworkSecurityPerimeterAssociationTimeouts">NetworkSecurityPerimeterAssociationTimeouts</a>

---



