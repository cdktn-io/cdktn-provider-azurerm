# `iothubSharedAccessPolicy` Submodule <a name="`iothubSharedAccessPolicy` Submodule" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubSharedAccessPolicyA <a name="IothubSharedAccessPolicyA" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy azurerm_iothub_shared_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iothub_name: str,
  name: str,
  resource_group_name: str,
  device_connect: bool | IResolvable = None,
  id: str = None,
  registry_read: bool | IResolvable = None,
  registry_write: bool | IResolvable = None,
  service_connect: bool | IResolvable = None,
  timeouts: IothubSharedAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.iothubName">iothub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.deviceConnect">device_connect</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryRead">registry_read</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryWrite">registry_write</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.serviceConnect">service_connect</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.iothubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}.

---

##### `device_connect`<sup>Optional</sup> <a name="device_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.deviceConnect"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registry_read`<sup>Optional</sup> <a name="registry_read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryRead"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}.

---

##### `registry_write`<sup>Optional</sup> <a name="registry_write" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.registryWrite"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}.

---

##### `service_connect`<sup>Optional</sup> <a name="service_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.serviceConnect"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#timeouts IothubSharedAccessPolicyA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetDeviceConnect">reset_device_connect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryRead">reset_registry_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryWrite">reset_registry_write</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetServiceConnect">reset_service_connect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}.

---

##### `reset_device_connect` <a name="reset_device_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetDeviceConnect"></a>

```python
def reset_device_connect() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_registry_read` <a name="reset_registry_read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryRead"></a>

```python
def reset_registry_read() -> None
```

##### `reset_registry_write` <a name="reset_registry_write" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetRegistryWrite"></a>

```python
def reset_registry_write() -> None
```

##### `reset_service_connect` <a name="reset_service_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetServiceConnect"></a>

```python
def reset_service_connect() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IothubSharedAccessPolicyA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IothubSharedAccessPolicyA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IothubSharedAccessPolicyA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IothubSharedAccessPolicyA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IothubSharedAccessPolicyA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference">IothubSharedAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnectInput">device_connect_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubNameInput">iothub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryReadInput">registry_read_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWriteInput">registry_write_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnectInput">service_connect_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnect">device_connect</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubName">iothub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryRead">registry_read</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWrite">registry_write</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnect">service_connect</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeouts"></a>

```python
timeouts: IothubSharedAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference">IothubSharedAccessPolicyTimeoutsOutputReference</a>

---

##### `device_connect_input`<sup>Optional</sup> <a name="device_connect_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnectInput"></a>

```python
device_connect_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_name_input`<sup>Optional</sup> <a name="iothub_name_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubNameInput"></a>

```python
iothub_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registry_read_input`<sup>Optional</sup> <a name="registry_read_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryReadInput"></a>

```python
registry_read_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `registry_write_input`<sup>Optional</sup> <a name="registry_write_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWriteInput"></a>

```python
registry_write_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `service_connect_input`<sup>Optional</sup> <a name="service_connect_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnectInput"></a>

```python
service_connect_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IothubSharedAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

---

##### `device_connect`<sup>Required</sup> <a name="device_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.deviceConnect"></a>

```python
device_connect: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.iothubName"></a>

```python
iothub_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `registry_read`<sup>Required</sup> <a name="registry_read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryRead"></a>

```python
registry_read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `registry_write`<sup>Required</sup> <a name="registry_write" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.registryWrite"></a>

```python
registry_write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `service_connect`<sup>Required</sup> <a name="service_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.serviceConnect"></a>

```python
service_connect: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubSharedAccessPolicyAConfig <a name="IothubSharedAccessPolicyAConfig" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  iothub_name: str,
  name: str,
  resource_group_name: str,
  device_connect: bool | IResolvable = None,
  id: str = None,
  registry_read: bool | IResolvable = None,
  registry_write: bool | IResolvable = None,
  service_connect: bool | IResolvable = None,
  timeouts: IothubSharedAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.iothubName">iothub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.deviceConnect">device_connect</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryRead">registry_read</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryWrite">registry_write</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.serviceConnect">service_connect</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.iothubName"></a>

```python
iothub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#iothub_name IothubSharedAccessPolicyA#iothub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#name IothubSharedAccessPolicyA#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#resource_group_name IothubSharedAccessPolicyA#resource_group_name}.

---

##### `device_connect`<sup>Optional</sup> <a name="device_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.deviceConnect"></a>

```python
device_connect: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#device_connect IothubSharedAccessPolicyA#device_connect}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#id IothubSharedAccessPolicyA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registry_read`<sup>Optional</sup> <a name="registry_read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryRead"></a>

```python
registry_read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_read IothubSharedAccessPolicyA#registry_read}.

---

##### `registry_write`<sup>Optional</sup> <a name="registry_write" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.registryWrite"></a>

```python
registry_write: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#registry_write IothubSharedAccessPolicyA#registry_write}.

---

##### `service_connect`<sup>Optional</sup> <a name="service_connect" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.serviceConnect"></a>

```python
service_connect: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#service_connect IothubSharedAccessPolicyA#service_connect}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyAConfig.property.timeouts"></a>

```python
timeouts: IothubSharedAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#timeouts IothubSharedAccessPolicyA#timeouts}

---

### IothubSharedAccessPolicyTimeouts <a name="IothubSharedAccessPolicyTimeouts" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#create IothubSharedAccessPolicyA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#delete IothubSharedAccessPolicyA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#read IothubSharedAccessPolicyA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/iothub_shared_access_policy#update IothubSharedAccessPolicyA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubSharedAccessPolicyTimeoutsOutputReference <a name="IothubSharedAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import iothub_shared_access_policy

iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IothubSharedAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.iothubSharedAccessPolicy.IothubSharedAccessPolicyTimeouts">IothubSharedAccessPolicyTimeouts</a>

---



