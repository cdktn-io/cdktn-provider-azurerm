# `managedDevopsPool` Submodule <a name="`managedDevopsPool` Submodule" id="@cdktn/provider-azurerm.managedDevopsPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDevopsPool <a name="ManagedDevopsPool" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool azurerm_managed_devops_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPool(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  azure_devops_organization: ManagedDevopsPoolAzureDevopsOrganization,
  dev_center_project_id: str,
  location: str,
  maximum_concurrency: typing.Union[int, float],
  name: str,
  resource_group_name: str,
  virtual_machine_scale_set_fabric: ManagedDevopsPoolVirtualMachineScaleSetFabric,
  id: str = None,
  identity: ManagedDevopsPoolIdentity = None,
  stateful_agent: ManagedDevopsPoolStatefulAgent = None,
  stateless_agent: ManagedDevopsPoolStatelessAgent = None,
  tags: typing.Mapping[str] = None,
  timeouts: ManagedDevopsPoolTimeouts = None,
  work_folder: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.azureDevopsOrganization">azure_devops_organization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | azure_devops_organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.virtualMachineScaleSetFabric">virtual_machine_scale_set_fabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | virtual_machine_scale_set_fabric block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.statefulAgent">stateful_agent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | stateful_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.statelessAgent">stateless_agent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | stateless_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.workFolder">work_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `azure_devops_organization`<sup>Required</sup> <a name="azure_devops_organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.azureDevopsOrganization"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

azure_devops_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#azure_devops_organization ManagedDevopsPool#azure_devops_organization}

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.devCenterProjectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}.

---

##### `maximum_concurrency`<sup>Required</sup> <a name="maximum_concurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.maximumConcurrency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}.

---

##### `virtual_machine_scale_set_fabric`<sup>Required</sup> <a name="virtual_machine_scale_set_fabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.virtualMachineScaleSetFabric"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

virtual_machine_scale_set_fabric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#virtual_machine_scale_set_fabric ManagedDevopsPool#virtual_machine_scale_set_fabric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#identity ManagedDevopsPool#identity}

---

##### `stateful_agent`<sup>Optional</sup> <a name="stateful_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.statefulAgent"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

stateful_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#stateful_agent ManagedDevopsPool#stateful_agent}

---

##### `stateless_agent`<sup>Optional</sup> <a name="stateless_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.statelessAgent"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

stateless_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#stateless_agent ManagedDevopsPool#stateless_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#timeouts ManagedDevopsPool#timeouts}

---

##### `work_folder`<sup>Optional</sup> <a name="work_folder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.workFolder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization">put_azure_devops_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent">put_stateful_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent">put_stateless_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric">put_virtual_machine_scale_set_fabric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatefulAgent">reset_stateful_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatelessAgent">reset_stateless_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetWorkFolder">reset_work_folder</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azure_devops_organization` <a name="put_azure_devops_organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization"></a>

```python
def put_azure_devops_organization(
  organization: IResolvable | typing.List[ManagedDevopsPoolAzureDevopsOrganizationOrganization],
  permission: ManagedDevopsPoolAzureDevopsOrganizationPermission = None
) -> None
```

###### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization.parameter.organization"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#organization ManagedDevopsPool#organization}

---

###### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization.parameter.permission"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#permission ManagedDevopsPool#permission}

---

##### `put_identity` <a name="put_identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity"></a>

```python
def put_identity(
  identity_ids: typing.List[str],
  type: str
) -> None
```

###### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}.

---

##### `put_stateful_agent` <a name="put_stateful_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent"></a>

```python
def put_stateful_agent(
  automatic_resource_prediction: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction = None,
  grace_period_time_span: str = None,
  manual_resource_prediction: ManagedDevopsPoolStatefulAgentManualResourcePrediction = None,
  maximum_agent_lifetime: str = None
) -> None
```

###### `automatic_resource_prediction`<sup>Optional</sup> <a name="automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent.parameter.automaticResourcePrediction"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

###### `grace_period_time_span`<sup>Optional</sup> <a name="grace_period_time_span" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent.parameter.gracePeriodTimeSpan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}.

---

###### `manual_resource_prediction`<sup>Optional</sup> <a name="manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent.parameter.manualResourcePrediction"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

###### `maximum_agent_lifetime`<sup>Optional</sup> <a name="maximum_agent_lifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent.parameter.maximumAgentLifetime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}.

---

##### `put_stateless_agent` <a name="put_stateless_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent"></a>

```python
def put_stateless_agent(
  automatic_resource_prediction: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction = None,
  manual_resource_prediction: ManagedDevopsPoolStatelessAgentManualResourcePrediction = None
) -> None
```

###### `automatic_resource_prediction`<sup>Optional</sup> <a name="automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent.parameter.automaticResourcePrediction"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

###### `manual_resource_prediction`<sup>Optional</sup> <a name="manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent.parameter.manualResourcePrediction"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}.

---

##### `put_virtual_machine_scale_set_fabric` <a name="put_virtual_machine_scale_set_fabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric"></a>

```python
def put_virtual_machine_scale_set_fabric(
  image: IResolvable | typing.List[ManagedDevopsPoolVirtualMachineScaleSetFabricImage],
  sku_name: str,
  os_disk_storage_account_type: str = None,
  security: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity = None,
  storage: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage = None,
  subnet_id: str = None
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.image"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#image ManagedDevopsPool#image}

---

###### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}.

---

###### `os_disk_storage_account_type`<sup>Optional</sup> <a name="os_disk_storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.osDiskStorageAccountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}.

---

###### `security`<sup>Optional</sup> <a name="security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.security"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#security ManagedDevopsPool#security}

---

###### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#storage ManagedDevopsPool#storage}

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_stateful_agent` <a name="reset_stateful_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatefulAgent"></a>

```python
def reset_stateful_agent() -> None
```

##### `reset_stateless_agent` <a name="reset_stateless_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatelessAgent"></a>

```python
def reset_stateless_agent() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_work_folder` <a name="reset_work_folder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetWorkFolder"></a>

```python
def reset_work_folder() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedDevopsPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedDevopsPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedDevopsPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganization">azure_devops_organization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference">ManagedDevopsPoolAzureDevopsOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference">ManagedDevopsPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgent">stateful_agent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference">ManagedDevopsPoolStatefulAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgent">stateless_agent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference">ManagedDevopsPoolStatelessAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference">ManagedDevopsPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabric">virtual_machine_scale_set_fabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganizationInput">azure_devops_organization_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectIdInput">dev_center_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identityInput">identity_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrencyInput">maximum_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgentInput">stateful_agent_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgentInput">stateless_agent_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabricInput">virtual_machine_scale_set_fabric_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolderInput">work_folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolder">work_folder</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `azure_devops_organization`<sup>Required</sup> <a name="azure_devops_organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganization"></a>

```python
azure_devops_organization: ManagedDevopsPoolAzureDevopsOrganizationOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference">ManagedDevopsPoolAzureDevopsOrganizationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identity"></a>

```python
identity: ManagedDevopsPoolIdentityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference">ManagedDevopsPoolIdentityOutputReference</a>

---

##### `stateful_agent`<sup>Required</sup> <a name="stateful_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgent"></a>

```python
stateful_agent: ManagedDevopsPoolStatefulAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference">ManagedDevopsPoolStatefulAgentOutputReference</a>

---

##### `stateless_agent`<sup>Required</sup> <a name="stateless_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgent"></a>

```python
stateless_agent: ManagedDevopsPoolStatelessAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference">ManagedDevopsPoolStatelessAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeouts"></a>

```python
timeouts: ManagedDevopsPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference">ManagedDevopsPoolTimeoutsOutputReference</a>

---

##### `virtual_machine_scale_set_fabric`<sup>Required</sup> <a name="virtual_machine_scale_set_fabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabric"></a>

```python
virtual_machine_scale_set_fabric: ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference</a>

---

##### `azure_devops_organization_input`<sup>Optional</sup> <a name="azure_devops_organization_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganizationInput"></a>

```python
azure_devops_organization_input: ManagedDevopsPoolAzureDevopsOrganization
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---

##### `dev_center_project_id_input`<sup>Optional</sup> <a name="dev_center_project_id_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectIdInput"></a>

```python
dev_center_project_id_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identityInput"></a>

```python
identity_input: ManagedDevopsPoolIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maximum_concurrency_input`<sup>Optional</sup> <a name="maximum_concurrency_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrencyInput"></a>

```python
maximum_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `stateful_agent_input`<sup>Optional</sup> <a name="stateful_agent_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgentInput"></a>

```python
stateful_agent_input: ManagedDevopsPoolStatefulAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---

##### `stateless_agent_input`<sup>Optional</sup> <a name="stateless_agent_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgentInput"></a>

```python
stateless_agent_input: ManagedDevopsPoolStatelessAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ManagedDevopsPoolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---

##### `virtual_machine_scale_set_fabric_input`<sup>Optional</sup> <a name="virtual_machine_scale_set_fabric_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabricInput"></a>

```python
virtual_machine_scale_set_fabric_input: ManagedDevopsPoolVirtualMachineScaleSetFabric
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---

##### `work_folder_input`<sup>Optional</sup> <a name="work_folder_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolderInput"></a>

```python
work_folder_input: str
```

- *Type:* str

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectId"></a>

```python
dev_center_project_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maximum_concurrency`<sup>Required</sup> <a name="maximum_concurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrency"></a>

```python
maximum_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `work_folder`<sup>Required</sup> <a name="work_folder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolder"></a>

```python
work_folder: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDevopsPoolAzureDevopsOrganization <a name="ManagedDevopsPoolAzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization(
  organization: IResolvable | typing.List[ManagedDevopsPoolAzureDevopsOrganizationOrganization],
  permission: ManagedDevopsPoolAzureDevopsOrganizationPermission = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.organization">organization</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]</code> | organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.permission">permission</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | permission block. |

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.organization"></a>

```python
organization: IResolvable | typing.List[ManagedDevopsPoolAzureDevopsOrganizationOrganization]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#organization ManagedDevopsPool#organization}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.permission"></a>

```python
permission: ManagedDevopsPoolAzureDevopsOrganizationPermission
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#permission ManagedDevopsPool#permission}

---

### ManagedDevopsPoolAzureDevopsOrganizationOrganization <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization(
  parallelism: typing.Union[int, float],
  url: str,
  projects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.projects">projects</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}. |

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}.

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}.

---

### ManagedDevopsPoolAzureDevopsOrganizationPermission <a name="ManagedDevopsPoolAzureDevopsOrganizationPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission(
  kind: str,
  administrator_account: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.administratorAccount">administrator_account</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | administrator_account block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}.

---

##### `administrator_account`<sup>Optional</sup> <a name="administrator_account" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.administratorAccount"></a>

```python
administrator_account: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

administrator_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#administrator_account ManagedDevopsPool#administrator_account}

---

### ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount(
  groups: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.groups">groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}.

---

### ManagedDevopsPoolConfig <a name="ManagedDevopsPoolConfig" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  azure_devops_organization: ManagedDevopsPoolAzureDevopsOrganization,
  dev_center_project_id: str,
  location: str,
  maximum_concurrency: typing.Union[int, float],
  name: str,
  resource_group_name: str,
  virtual_machine_scale_set_fabric: ManagedDevopsPoolVirtualMachineScaleSetFabric,
  id: str = None,
  identity: ManagedDevopsPoolIdentity = None,
  stateful_agent: ManagedDevopsPoolStatefulAgent = None,
  stateless_agent: ManagedDevopsPoolStatelessAgent = None,
  tags: typing.Mapping[str] = None,
  timeouts: ManagedDevopsPoolTimeouts = None,
  work_folder: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.azureDevopsOrganization">azure_devops_organization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | azure_devops_organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.devCenterProjectId">dev_center_project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.maximumConcurrency">maximum_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.virtualMachineScaleSetFabric">virtual_machine_scale_set_fabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | virtual_machine_scale_set_fabric block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statefulAgent">stateful_agent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | stateful_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statelessAgent">stateless_agent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | stateless_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.workFolder">work_folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `azure_devops_organization`<sup>Required</sup> <a name="azure_devops_organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.azureDevopsOrganization"></a>

```python
azure_devops_organization: ManagedDevopsPoolAzureDevopsOrganization
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

azure_devops_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#azure_devops_organization ManagedDevopsPool#azure_devops_organization}

---

##### `dev_center_project_id`<sup>Required</sup> <a name="dev_center_project_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.devCenterProjectId"></a>

```python
dev_center_project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}.

---

##### `maximum_concurrency`<sup>Required</sup> <a name="maximum_concurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.maximumConcurrency"></a>

```python
maximum_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}.

---

##### `virtual_machine_scale_set_fabric`<sup>Required</sup> <a name="virtual_machine_scale_set_fabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.virtualMachineScaleSetFabric"></a>

```python
virtual_machine_scale_set_fabric: ManagedDevopsPoolVirtualMachineScaleSetFabric
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

virtual_machine_scale_set_fabric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#virtual_machine_scale_set_fabric ManagedDevopsPool#virtual_machine_scale_set_fabric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.identity"></a>

```python
identity: ManagedDevopsPoolIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#identity ManagedDevopsPool#identity}

---

##### `stateful_agent`<sup>Optional</sup> <a name="stateful_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statefulAgent"></a>

```python
stateful_agent: ManagedDevopsPoolStatefulAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

stateful_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#stateful_agent ManagedDevopsPool#stateful_agent}

---

##### `stateless_agent`<sup>Optional</sup> <a name="stateless_agent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statelessAgent"></a>

```python
stateless_agent: ManagedDevopsPoolStatelessAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

stateless_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#stateless_agent ManagedDevopsPool#stateless_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.timeouts"></a>

```python
timeouts: ManagedDevopsPoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#timeouts ManagedDevopsPool#timeouts}

---

##### `work_folder`<sup>Optional</sup> <a name="work_folder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.workFolder"></a>

```python
work_folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}.

---

### ManagedDevopsPoolIdentity <a name="ManagedDevopsPoolIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolIdentity(
  identity_ids: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}. |

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}.

---

### ManagedDevopsPoolStatefulAgent <a name="ManagedDevopsPoolStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgent(
  automatic_resource_prediction: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction = None,
  grace_period_time_span: str = None,
  manual_resource_prediction: ManagedDevopsPoolStatefulAgentManualResourcePrediction = None,
  maximum_agent_lifetime: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.automaticResourcePrediction">automatic_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | automatic_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.gracePeriodTimeSpan">grace_period_time_span</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.manualResourcePrediction">manual_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | manual_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.maximumAgentLifetime">maximum_agent_lifetime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}. |

---

##### `automatic_resource_prediction`<sup>Optional</sup> <a name="automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.automaticResourcePrediction"></a>

```python
automatic_resource_prediction: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

##### `grace_period_time_span`<sup>Optional</sup> <a name="grace_period_time_span" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.gracePeriodTimeSpan"></a>

```python
grace_period_time_span: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}.

---

##### `manual_resource_prediction`<sup>Optional</sup> <a name="manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.manualResourcePrediction"></a>

```python
manual_resource_prediction: ManagedDevopsPoolStatefulAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

##### `maximum_agent_lifetime`<sup>Optional</sup> <a name="maximum_agent_lifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.maximumAgentLifetime"></a>

```python
maximum_agent_lifetime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}.

---

### ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction <a name="ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction(
  prediction_preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.property.predictionPreference">prediction_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}. |

---

##### `prediction_preference`<sup>Optional</sup> <a name="prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.property.predictionPreference"></a>

```python
prediction_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePrediction <a name="ManagedDevopsPoolStatefulAgentManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction(
  all_week_schedule: typing.Union[int, float] = None,
  friday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule] = None,
  monday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule] = None,
  saturday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule] = None,
  sunday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule] = None,
  thursday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule] = None,
  time_zone_name: str = None,
  tuesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule] = None,
  wednesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.allWeekSchedule">all_week_schedule</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.fridaySchedule">friday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]</code> | friday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.mondaySchedule">monday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]</code> | monday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.saturdaySchedule">saturday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]</code> | saturday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.sundaySchedule">sunday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]</code> | sunday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.thursdaySchedule">thursday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]</code> | thursday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.timeZoneName">time_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.tuesdaySchedule">tuesday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]</code> | tuesday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.wednesdaySchedule">wednesday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]</code> | wednesday_schedule block. |

---

##### `all_week_schedule`<sup>Optional</sup> <a name="all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.allWeekSchedule"></a>

```python
all_week_schedule: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

##### `friday_schedule`<sup>Optional</sup> <a name="friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.fridaySchedule"></a>

```python
friday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

##### `monday_schedule`<sup>Optional</sup> <a name="monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.mondaySchedule"></a>

```python
monday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

##### `saturday_schedule`<sup>Optional</sup> <a name="saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.saturdaySchedule"></a>

```python
saturday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

##### `sunday_schedule`<sup>Optional</sup> <a name="sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.sundaySchedule"></a>

```python
sunday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

##### `thursday_schedule`<sup>Optional</sup> <a name="thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.thursdaySchedule"></a>

```python
thursday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

##### `time_zone_name`<sup>Optional</sup> <a name="time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.timeZoneName"></a>

```python
time_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

##### `tuesday_schedule`<sup>Optional</sup> <a name="tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.tuesdaySchedule"></a>

```python
tuesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

##### `wednesday_schedule`<sup>Optional</sup> <a name="wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.wednesdaySchedule"></a>

```python
wednesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgent <a name="ManagedDevopsPoolStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgent(
  automatic_resource_prediction: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction = None,
  manual_resource_prediction: ManagedDevopsPoolStatelessAgentManualResourcePrediction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.automaticResourcePrediction">automatic_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | automatic_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.manualResourcePrediction">manual_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | manual_resource_prediction block. |

---

##### `automatic_resource_prediction`<sup>Optional</sup> <a name="automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.automaticResourcePrediction"></a>

```python
automatic_resource_prediction: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

##### `manual_resource_prediction`<sup>Optional</sup> <a name="manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.manualResourcePrediction"></a>

```python
manual_resource_prediction: ManagedDevopsPoolStatelessAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

### ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction <a name="ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction(
  prediction_preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.property.predictionPreference">prediction_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}. |

---

##### `prediction_preference`<sup>Optional</sup> <a name="prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.property.predictionPreference"></a>

```python
prediction_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePrediction <a name="ManagedDevopsPoolStatelessAgentManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction(
  all_week_schedule: typing.Union[int, float] = None,
  friday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule] = None,
  monday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule] = None,
  saturday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule] = None,
  sunday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule] = None,
  thursday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule] = None,
  time_zone_name: str = None,
  tuesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule] = None,
  wednesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.allWeekSchedule">all_week_schedule</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.fridaySchedule">friday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]</code> | friday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.mondaySchedule">monday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]</code> | monday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.saturdaySchedule">saturday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]</code> | saturday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.sundaySchedule">sunday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]</code> | sunday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.thursdaySchedule">thursday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]</code> | thursday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.timeZoneName">time_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.tuesdaySchedule">tuesday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]</code> | tuesday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.wednesdaySchedule">wednesday_schedule</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]</code> | wednesday_schedule block. |

---

##### `all_week_schedule`<sup>Optional</sup> <a name="all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.allWeekSchedule"></a>

```python
all_week_schedule: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

##### `friday_schedule`<sup>Optional</sup> <a name="friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.fridaySchedule"></a>

```python
friday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

##### `monday_schedule`<sup>Optional</sup> <a name="monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.mondaySchedule"></a>

```python
monday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

##### `saturday_schedule`<sup>Optional</sup> <a name="saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.saturdaySchedule"></a>

```python
saturday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

##### `sunday_schedule`<sup>Optional</sup> <a name="sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.sundaySchedule"></a>

```python
sunday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

##### `thursday_schedule`<sup>Optional</sup> <a name="thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.thursdaySchedule"></a>

```python
thursday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

##### `time_zone_name`<sup>Optional</sup> <a name="time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.timeZoneName"></a>

```python
time_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

##### `tuesday_schedule`<sup>Optional</sup> <a name="tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.tuesdaySchedule"></a>

```python
tuesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

##### `wednesday_schedule`<sup>Optional</sup> <a name="wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.wednesdaySchedule"></a>

```python
wednesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule(
  count: typing.Union[int, float],
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolTimeouts <a name="ManagedDevopsPoolTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabric <a name="ManagedDevopsPoolVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric(
  image: IResolvable | typing.List[ManagedDevopsPoolVirtualMachineScaleSetFabricImage],
  sku_name: str,
  os_disk_storage_account_type: str = None,
  security: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity = None,
  storage: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.image">image</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]</code> | image block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.osDiskStorageAccountType">os_disk_storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.security">security</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | security block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.image"></a>

```python
image: IResolvable | typing.List[ManagedDevopsPoolVirtualMachineScaleSetFabricImage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#image ManagedDevopsPool#image}

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}.

---

##### `os_disk_storage_account_type`<sup>Optional</sup> <a name="os_disk_storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.osDiskStorageAccountType"></a>

```python
os_disk_storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.security"></a>

```python
security: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#security ManagedDevopsPool#security}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.storage"></a>

```python
storage: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#storage ManagedDevopsPool#storage}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricImage <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage(
  aliases: typing.List[str] = None,
  buffer: str = None,
  id: str = None,
  well_known_image_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.buffer">buffer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.wellKnownImageName">well_known_image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}.

---

##### `buffer`<sup>Optional</sup> <a name="buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.buffer"></a>

```python
buffer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `well_known_image_name`<sup>Optional</sup> <a name="well_known_image_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.wellKnownImageName"></a>

```python
well_known_image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity(
  interactive_logon_enabled: bool | IResolvable = None,
  key_vault_management: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.interactiveLogonEnabled">interactive_logon_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.keyVaultManagement">key_vault_management</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | key_vault_management block. |

---

##### `interactive_logon_enabled`<sup>Optional</sup> <a name="interactive_logon_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.interactiveLogonEnabled"></a>

```python
interactive_logon_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}.

---

##### `key_vault_management`<sup>Optional</sup> <a name="key_vault_management" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.keyVaultManagement"></a>

```python
key_vault_management: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

key_vault_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_vault_management ManagedDevopsPool#key_vault_management}

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement(
  key_vault_certificate_ids: typing.List[str],
  certificate_store_location: str = None,
  certificate_store_name: str = None,
  key_export_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyVaultCertificateIds">key_vault_certificate_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreLocation">certificate_store_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreName">certificate_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyExportEnabled">key_export_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}. |

---

##### `key_vault_certificate_ids`<sup>Required</sup> <a name="key_vault_certificate_ids" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyVaultCertificateIds"></a>

```python
key_vault_certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}.

---

##### `certificate_store_location`<sup>Optional</sup> <a name="certificate_store_location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreLocation"></a>

```python
certificate_store_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}.

---

##### `certificate_store_name`<sup>Optional</sup> <a name="certificate_store_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreName"></a>

```python
certificate_store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}.

---

##### `key_export_enabled`<sup>Optional</sup> <a name="key_export_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyExportEnabled"></a>

```python
key_export_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricStorage <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage(
  disk_size_in_gb: typing.Union[int, float],
  caching: str = None,
  drive_letter: str = None,
  storage_account_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.diskSizeInGb">disk_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.caching">caching</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.driveLetter">drive_letter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}. |

---

##### `disk_size_in_gb`<sup>Required</sup> <a name="disk_size_in_gb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.diskSizeInGb"></a>

```python
disk_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.caching"></a>

```python
caching: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}.

---

##### `drive_letter`<sup>Optional</sup> <a name="drive_letter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.driveLetter"></a>

```python
drive_letter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}.

---

##### `storage_account_type`<sup>Optional</sup> <a name="storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDevopsPoolAzureDevopsOrganizationOrganizationList <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganizationList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolAzureDevopsOrganizationOrganization]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]

---


### ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resetProjects">reset_projects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_projects` <a name="reset_projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resetProjects"></a>

```python
def reset_projects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelismInput">parallelism_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projectsInput">projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism">parallelism</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects">projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parallelism_input`<sup>Optional</sup> <a name="parallelism_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelismInput"></a>

```python
parallelism_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `projects_input`<sup>Optional</sup> <a name="projects_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projectsInput"></a>

```python
projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism"></a>

```python
parallelism: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolAzureDevopsOrganizationOrganization
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization">put_organization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission">put_permission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_organization` <a name="put_organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization"></a>

```python
def put_organization(
  value: IResolvable | typing.List[ManagedDevopsPoolAzureDevopsOrganizationOrganization]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]

---

##### `put_permission` <a name="put_permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission"></a>

```python
def put_permission(
  kind: str,
  administrator_account: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount = None
) -> None
```

###### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}.

---

###### `administrator_account`<sup>Optional</sup> <a name="administrator_account" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission.parameter.administratorAccount"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

administrator_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#administrator_account ManagedDevopsPool#administrator_account}

---

##### `reset_permission` <a name="reset_permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization">organization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList">ManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission">permission</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organizationInput">organization_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permissionInput">permission_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization"></a>

```python
organization: ManagedDevopsPoolAzureDevopsOrganizationOrganizationList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList">ManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a>

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission"></a>

```python
permission: ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference</a>

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organizationInput"></a>

```python
organization_input: IResolvable | typing.List[ManagedDevopsPoolAzureDevopsOrganizationOrganization]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>]

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permissionInput"></a>

```python
permission_input: ManagedDevopsPoolAzureDevopsOrganizationPermission
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolAzureDevopsOrganization
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_groups` <a name="reset_groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount">put_administrator_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resetAdministratorAccount">reset_administrator_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_administrator_account` <a name="put_administrator_account" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount"></a>

```python
def put_administrator_account(
  groups: typing.List[str] = None,
  users: typing.List[str] = None
) -> None
```

###### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount.parameter.groups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}.

---

###### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount.parameter.users"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}.

---

##### `reset_administrator_account` <a name="reset_administrator_account" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resetAdministratorAccount"></a>

```python
def reset_administrator_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount">administrator_account</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccountInput">administrator_account_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator_account`<sup>Required</sup> <a name="administrator_account" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount"></a>

```python
administrator_account: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference</a>

---

##### `administrator_account_input`<sup>Optional</sup> <a name="administrator_account_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccountInput"></a>

```python
administrator_account_input: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolAzureDevopsOrganizationPermission
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---


### ManagedDevopsPoolIdentityOutputReference <a name="ManagedDevopsPoolIdentityOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolIdentity
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---


### ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference <a name="ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference">reset_prediction_preference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prediction_preference` <a name="reset_prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference"></a>

```python
def reset_prediction_preference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput">prediction_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">prediction_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prediction_preference_input`<sup>Optional</sup> <a name="prediction_preference_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput"></a>

```python
prediction_preference_input: str
```

- *Type:* str

---

##### `prediction_preference`<sup>Required</sup> <a name="prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```python
prediction_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule">put_friday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule">put_monday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule">put_saturday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule">put_sunday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule">put_thursday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule">put_tuesday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule">put_wednesday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetAllWeekSchedule">reset_all_week_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetFridaySchedule">reset_friday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetMondaySchedule">reset_monday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSaturdaySchedule">reset_saturday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSundaySchedule">reset_sunday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetThursdaySchedule">reset_thursday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTimeZoneName">reset_time_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTuesdaySchedule">reset_tuesday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetWednesdaySchedule">reset_wednesday_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_friday_schedule` <a name="put_friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule"></a>

```python
def put_friday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]

---

##### `put_monday_schedule` <a name="put_monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule"></a>

```python
def put_monday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]

---

##### `put_saturday_schedule` <a name="put_saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule"></a>

```python
def put_saturday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]

---

##### `put_sunday_schedule` <a name="put_sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule"></a>

```python
def put_sunday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]

---

##### `put_thursday_schedule` <a name="put_thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule"></a>

```python
def put_thursday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]

---

##### `put_tuesday_schedule` <a name="put_tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule"></a>

```python
def put_tuesday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]

---

##### `put_wednesday_schedule` <a name="put_wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule"></a>

```python
def put_wednesday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]

---

##### `reset_all_week_schedule` <a name="reset_all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetAllWeekSchedule"></a>

```python
def reset_all_week_schedule() -> None
```

##### `reset_friday_schedule` <a name="reset_friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetFridaySchedule"></a>

```python
def reset_friday_schedule() -> None
```

##### `reset_monday_schedule` <a name="reset_monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetMondaySchedule"></a>

```python
def reset_monday_schedule() -> None
```

##### `reset_saturday_schedule` <a name="reset_saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSaturdaySchedule"></a>

```python
def reset_saturday_schedule() -> None
```

##### `reset_sunday_schedule` <a name="reset_sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSundaySchedule"></a>

```python
def reset_sunday_schedule() -> None
```

##### `reset_thursday_schedule` <a name="reset_thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetThursdaySchedule"></a>

```python
def reset_thursday_schedule() -> None
```

##### `reset_time_zone_name` <a name="reset_time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTimeZoneName"></a>

```python
def reset_time_zone_name() -> None
```

##### `reset_tuesday_schedule` <a name="reset_tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTuesdaySchedule"></a>

```python
def reset_tuesday_schedule() -> None
```

##### `reset_wednesday_schedule` <a name="reset_wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetWednesdaySchedule"></a>

```python
def reset_wednesday_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule">friday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule">monday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule">saturday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule">sunday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule">thursday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">tuesday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">wednesday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput">all_week_schedule_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridayScheduleInput">friday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondayScheduleInput">monday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput">saturday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundayScheduleInput">sunday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput">thursday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneNameInput">time_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput">tuesday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput">wednesday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule">all_week_schedule</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName">time_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friday_schedule`<sup>Required</sup> <a name="friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```python
friday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a>

---

##### `monday_schedule`<sup>Required</sup> <a name="monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```python
monday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a>

---

##### `saturday_schedule`<sup>Required</sup> <a name="saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```python
saturday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `sunday_schedule`<sup>Required</sup> <a name="sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```python
sunday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a>

---

##### `thursday_schedule`<sup>Required</sup> <a name="thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```python
thursday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `tuesday_schedule`<sup>Required</sup> <a name="tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```python
tuesday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `wednesday_schedule`<sup>Required</sup> <a name="wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```python
wednesday_schedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `all_week_schedule_input`<sup>Optional</sup> <a name="all_week_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput"></a>

```python
all_week_schedule_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `friday_schedule_input`<sup>Optional</sup> <a name="friday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridayScheduleInput"></a>

```python
friday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]

---

##### `monday_schedule_input`<sup>Optional</sup> <a name="monday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondayScheduleInput"></a>

```python
monday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]

---

##### `saturday_schedule_input`<sup>Optional</sup> <a name="saturday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput"></a>

```python
saturday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]

---

##### `sunday_schedule_input`<sup>Optional</sup> <a name="sunday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundayScheduleInput"></a>

```python
sunday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]

---

##### `thursday_schedule_input`<sup>Optional</sup> <a name="thursday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput"></a>

```python
thursday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]

---

##### `time_zone_name_input`<sup>Optional</sup> <a name="time_zone_name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneNameInput"></a>

```python
time_zone_name_input: str
```

- *Type:* str

---

##### `tuesday_schedule_input`<sup>Optional</sup> <a name="tuesday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput"></a>

```python
tuesday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]

---

##### `wednesday_schedule_input`<sup>Optional</sup> <a name="wednesday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput"></a>

```python
wednesday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]

---

##### `all_week_schedule`<sup>Required</sup> <a name="all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```python
all_week_schedule: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone_name`<sup>Required</sup> <a name="time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```python
time_zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolStatefulAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentOutputReference <a name="ManagedDevopsPoolStatefulAgentOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction">put_automatic_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction">put_manual_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetAutomaticResourcePrediction">reset_automatic_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetGracePeriodTimeSpan">reset_grace_period_time_span</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetManualResourcePrediction">reset_manual_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetMaximumAgentLifetime">reset_maximum_agent_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_automatic_resource_prediction` <a name="put_automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction"></a>

```python
def put_automatic_resource_prediction(
  prediction_preference: str = None
) -> None
```

###### `prediction_preference`<sup>Optional</sup> <a name="prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction.parameter.predictionPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

##### `put_manual_resource_prediction` <a name="put_manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction"></a>

```python
def put_manual_resource_prediction(
  all_week_schedule: typing.Union[int, float] = None,
  friday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule] = None,
  monday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule] = None,
  saturday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule] = None,
  sunday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule] = None,
  thursday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule] = None,
  time_zone_name: str = None,
  tuesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule] = None,
  wednesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule] = None
) -> None
```

###### `all_week_schedule`<sup>Optional</sup> <a name="all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.allWeekSchedule"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

###### `friday_schedule`<sup>Optional</sup> <a name="friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.fridaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

###### `monday_schedule`<sup>Optional</sup> <a name="monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.mondaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

###### `saturday_schedule`<sup>Optional</sup> <a name="saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.saturdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

###### `sunday_schedule`<sup>Optional</sup> <a name="sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.sundaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

###### `thursday_schedule`<sup>Optional</sup> <a name="thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.thursdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

###### `time_zone_name`<sup>Optional</sup> <a name="time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.timeZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

###### `tuesday_schedule`<sup>Optional</sup> <a name="tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.tuesdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

###### `wednesday_schedule`<sup>Optional</sup> <a name="wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.wednesdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

##### `reset_automatic_resource_prediction` <a name="reset_automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetAutomaticResourcePrediction"></a>

```python
def reset_automatic_resource_prediction() -> None
```

##### `reset_grace_period_time_span` <a name="reset_grace_period_time_span" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetGracePeriodTimeSpan"></a>

```python
def reset_grace_period_time_span() -> None
```

##### `reset_manual_resource_prediction` <a name="reset_manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetManualResourcePrediction"></a>

```python
def reset_manual_resource_prediction() -> None
```

##### `reset_maximum_agent_lifetime` <a name="reset_maximum_agent_lifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetMaximumAgentLifetime"></a>

```python
def reset_maximum_agent_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction">automatic_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction">manual_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePredictionInput">automatic_resource_prediction_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpanInput">grace_period_time_span_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePredictionInput">manual_resource_prediction_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetimeInput">maximum_agent_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan">grace_period_time_span</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime">maximum_agent_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_resource_prediction`<sup>Required</sup> <a name="automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction"></a>

```python
automatic_resource_prediction: ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference</a>

---

##### `manual_resource_prediction`<sup>Required</sup> <a name="manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction"></a>

```python
manual_resource_prediction: ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference</a>

---

##### `automatic_resource_prediction_input`<sup>Optional</sup> <a name="automatic_resource_prediction_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePredictionInput"></a>

```python
automatic_resource_prediction_input: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---

##### `grace_period_time_span_input`<sup>Optional</sup> <a name="grace_period_time_span_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpanInput"></a>

```python
grace_period_time_span_input: str
```

- *Type:* str

---

##### `manual_resource_prediction_input`<sup>Optional</sup> <a name="manual_resource_prediction_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePredictionInput"></a>

```python
manual_resource_prediction_input: ManagedDevopsPoolStatefulAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---

##### `maximum_agent_lifetime_input`<sup>Optional</sup> <a name="maximum_agent_lifetime_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetimeInput"></a>

```python
maximum_agent_lifetime_input: str
```

- *Type:* str

---

##### `grace_period_time_span`<sup>Required</sup> <a name="grace_period_time_span" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan"></a>

```python
grace_period_time_span: str
```

- *Type:* str

---

##### `maximum_agent_lifetime`<sup>Required</sup> <a name="maximum_agent_lifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime"></a>

```python
maximum_agent_lifetime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolStatefulAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---


### ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference <a name="ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference">reset_prediction_preference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prediction_preference` <a name="reset_prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference"></a>

```python
def reset_prediction_preference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput">prediction_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">prediction_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prediction_preference_input`<sup>Optional</sup> <a name="prediction_preference_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput"></a>

```python
prediction_preference_input: str
```

- *Type:* str

---

##### `prediction_preference`<sup>Required</sup> <a name="prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```python
prediction_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule">put_friday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule">put_monday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule">put_saturday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule">put_sunday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule">put_thursday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule">put_tuesday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule">put_wednesday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetAllWeekSchedule">reset_all_week_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetFridaySchedule">reset_friday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetMondaySchedule">reset_monday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSaturdaySchedule">reset_saturday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSundaySchedule">reset_sunday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetThursdaySchedule">reset_thursday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTimeZoneName">reset_time_zone_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTuesdaySchedule">reset_tuesday_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetWednesdaySchedule">reset_wednesday_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_friday_schedule` <a name="put_friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule"></a>

```python
def put_friday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]

---

##### `put_monday_schedule` <a name="put_monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule"></a>

```python
def put_monday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]

---

##### `put_saturday_schedule` <a name="put_saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule"></a>

```python
def put_saturday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]

---

##### `put_sunday_schedule` <a name="put_sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule"></a>

```python
def put_sunday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]

---

##### `put_thursday_schedule` <a name="put_thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule"></a>

```python
def put_thursday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]

---

##### `put_tuesday_schedule` <a name="put_tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule"></a>

```python
def put_tuesday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]

---

##### `put_wednesday_schedule` <a name="put_wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule"></a>

```python
def put_wednesday_schedule(
  value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]

---

##### `reset_all_week_schedule` <a name="reset_all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetAllWeekSchedule"></a>

```python
def reset_all_week_schedule() -> None
```

##### `reset_friday_schedule` <a name="reset_friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetFridaySchedule"></a>

```python
def reset_friday_schedule() -> None
```

##### `reset_monday_schedule` <a name="reset_monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetMondaySchedule"></a>

```python
def reset_monday_schedule() -> None
```

##### `reset_saturday_schedule` <a name="reset_saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSaturdaySchedule"></a>

```python
def reset_saturday_schedule() -> None
```

##### `reset_sunday_schedule` <a name="reset_sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSundaySchedule"></a>

```python
def reset_sunday_schedule() -> None
```

##### `reset_thursday_schedule` <a name="reset_thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetThursdaySchedule"></a>

```python
def reset_thursday_schedule() -> None
```

##### `reset_time_zone_name` <a name="reset_time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTimeZoneName"></a>

```python
def reset_time_zone_name() -> None
```

##### `reset_tuesday_schedule` <a name="reset_tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTuesdaySchedule"></a>

```python
def reset_tuesday_schedule() -> None
```

##### `reset_wednesday_schedule` <a name="reset_wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetWednesdaySchedule"></a>

```python
def reset_wednesday_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule">friday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule">monday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule">saturday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule">sunday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule">thursday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">tuesday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">wednesday_schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput">all_week_schedule_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridayScheduleInput">friday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondayScheduleInput">monday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput">saturday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundayScheduleInput">sunday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput">thursday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneNameInput">time_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput">tuesday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput">wednesday_schedule_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule">all_week_schedule</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName">time_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friday_schedule`<sup>Required</sup> <a name="friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```python
friday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a>

---

##### `monday_schedule`<sup>Required</sup> <a name="monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```python
monday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a>

---

##### `saturday_schedule`<sup>Required</sup> <a name="saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```python
saturday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `sunday_schedule`<sup>Required</sup> <a name="sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```python
sunday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a>

---

##### `thursday_schedule`<sup>Required</sup> <a name="thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```python
thursday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `tuesday_schedule`<sup>Required</sup> <a name="tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```python
tuesday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `wednesday_schedule`<sup>Required</sup> <a name="wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```python
wednesday_schedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `all_week_schedule_input`<sup>Optional</sup> <a name="all_week_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput"></a>

```python
all_week_schedule_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `friday_schedule_input`<sup>Optional</sup> <a name="friday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridayScheduleInput"></a>

```python
friday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]

---

##### `monday_schedule_input`<sup>Optional</sup> <a name="monday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondayScheduleInput"></a>

```python
monday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]

---

##### `saturday_schedule_input`<sup>Optional</sup> <a name="saturday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput"></a>

```python
saturday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]

---

##### `sunday_schedule_input`<sup>Optional</sup> <a name="sunday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundayScheduleInput"></a>

```python
sunday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]

---

##### `thursday_schedule_input`<sup>Optional</sup> <a name="thursday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput"></a>

```python
thursday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]

---

##### `time_zone_name_input`<sup>Optional</sup> <a name="time_zone_name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneNameInput"></a>

```python
time_zone_name_input: str
```

- *Type:* str

---

##### `tuesday_schedule_input`<sup>Optional</sup> <a name="tuesday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput"></a>

```python
tuesday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]

---

##### `wednesday_schedule_input`<sup>Optional</sup> <a name="wednesday_schedule_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput"></a>

```python
wednesday_schedule_input: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]

---

##### `all_week_schedule`<sup>Required</sup> <a name="all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```python
all_week_schedule: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone_name`<sup>Required</sup> <a name="time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```python
time_zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolStatelessAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentOutputReference <a name="ManagedDevopsPoolStatelessAgentOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction">put_automatic_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction">put_manual_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetAutomaticResourcePrediction">reset_automatic_resource_prediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetManualResourcePrediction">reset_manual_resource_prediction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_automatic_resource_prediction` <a name="put_automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction"></a>

```python
def put_automatic_resource_prediction(
  prediction_preference: str = None
) -> None
```

###### `prediction_preference`<sup>Optional</sup> <a name="prediction_preference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction.parameter.predictionPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

##### `put_manual_resource_prediction` <a name="put_manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction"></a>

```python
def put_manual_resource_prediction(
  all_week_schedule: typing.Union[int, float] = None,
  friday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule] = None,
  monday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule] = None,
  saturday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule] = None,
  sunday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule] = None,
  thursday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule] = None,
  time_zone_name: str = None,
  tuesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule] = None,
  wednesday_schedule: IResolvable | typing.List[ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule] = None
) -> None
```

###### `all_week_schedule`<sup>Optional</sup> <a name="all_week_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.allWeekSchedule"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

###### `friday_schedule`<sup>Optional</sup> <a name="friday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.fridaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

###### `monday_schedule`<sup>Optional</sup> <a name="monday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.mondaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

###### `saturday_schedule`<sup>Optional</sup> <a name="saturday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.saturdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

###### `sunday_schedule`<sup>Optional</sup> <a name="sunday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.sundaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

###### `thursday_schedule`<sup>Optional</sup> <a name="thursday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.thursdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

###### `time_zone_name`<sup>Optional</sup> <a name="time_zone_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.timeZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

###### `tuesday_schedule`<sup>Optional</sup> <a name="tuesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.tuesdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

###### `wednesday_schedule`<sup>Optional</sup> <a name="wednesday_schedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.wednesdaySchedule"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

##### `reset_automatic_resource_prediction` <a name="reset_automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetAutomaticResourcePrediction"></a>

```python
def reset_automatic_resource_prediction() -> None
```

##### `reset_manual_resource_prediction` <a name="reset_manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetManualResourcePrediction"></a>

```python
def reset_manual_resource_prediction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction">automatic_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction">manual_resource_prediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePredictionInput">automatic_resource_prediction_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePredictionInput">manual_resource_prediction_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_resource_prediction`<sup>Required</sup> <a name="automatic_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction"></a>

```python
automatic_resource_prediction: ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference</a>

---

##### `manual_resource_prediction`<sup>Required</sup> <a name="manual_resource_prediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction"></a>

```python
manual_resource_prediction: ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference</a>

---

##### `automatic_resource_prediction_input`<sup>Optional</sup> <a name="automatic_resource_prediction_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePredictionInput"></a>

```python
automatic_resource_prediction_input: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---

##### `manual_resource_prediction_input`<sup>Optional</sup> <a name="manual_resource_prediction_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePredictionInput"></a>

```python
manual_resource_prediction_input: ManagedDevopsPoolStatelessAgentManualResourcePrediction
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolStatelessAgent
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---


### ManagedDevopsPoolTimeoutsOutputReference <a name="ManagedDevopsPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricImageList <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImageList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ManagedDevopsPoolVirtualMachineScaleSetFabricImage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetBuffer">reset_buffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetWellKnownImageName">reset_well_known_image_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aliases` <a name="reset_aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_buffer` <a name="reset_buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetBuffer"></a>

```python
def reset_buffer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_well_known_image_name` <a name="reset_well_known_image_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetWellKnownImageName"></a>

```python
def reset_well_known_image_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.bufferInput">buffer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageNameInput">well_known_image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer">buffer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName">well_known_image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `buffer_input`<sup>Optional</sup> <a name="buffer_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.bufferInput"></a>

```python
buffer_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `well_known_image_name_input`<sup>Optional</sup> <a name="well_known_image_name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageNameInput"></a>

```python
well_known_image_name_input: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `buffer`<sup>Required</sup> <a name="buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer"></a>

```python
buffer: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `well_known_image_name`<sup>Required</sup> <a name="well_known_image_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName"></a>

```python
well_known_image_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedDevopsPoolVirtualMachineScaleSetFabricImage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage">put_image</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity">put_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetOsDiskStorageAccountType">reset_os_disk_storage_account_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSecurity">reset_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_image` <a name="put_image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage"></a>

```python
def put_image(
  value: IResolvable | typing.List[ManagedDevopsPoolVirtualMachineScaleSetFabricImage]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]

---

##### `put_security` <a name="put_security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity"></a>

```python
def put_security(
  interactive_logon_enabled: bool | IResolvable = None,
  key_vault_management: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement = None
) -> None
```

###### `interactive_logon_enabled`<sup>Optional</sup> <a name="interactive_logon_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity.parameter.interactiveLogonEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}.

---

###### `key_vault_management`<sup>Optional</sup> <a name="key_vault_management" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity.parameter.keyVaultManagement"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

key_vault_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_vault_management ManagedDevopsPool#key_vault_management}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage"></a>

```python
def put_storage(
  disk_size_in_gb: typing.Union[int, float],
  caching: str = None,
  drive_letter: str = None,
  storage_account_type: str = None
) -> None
```

###### `disk_size_in_gb`<sup>Required</sup> <a name="disk_size_in_gb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage.parameter.diskSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}.

---

###### `caching`<sup>Optional</sup> <a name="caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage.parameter.caching"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}.

---

###### `drive_letter`<sup>Optional</sup> <a name="drive_letter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage.parameter.driveLetter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}.

---

###### `storage_account_type`<sup>Optional</sup> <a name="storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage.parameter.storageAccountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}.

---

##### `reset_os_disk_storage_account_type` <a name="reset_os_disk_storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetOsDiskStorageAccountType"></a>

```python
def reset_os_disk_storage_account_type() -> None
```

##### `reset_security` <a name="reset_security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSecurity"></a>

```python
def reset_security() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList">ManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security">security</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.imageInput">image_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountTypeInput">os_disk_storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.securityInput">security_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storageInput">storage_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType">os_disk_storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image"></a>

```python
image: ManagedDevopsPoolVirtualMachineScaleSetFabricImageList
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList">ManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security"></a>

```python
security: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage"></a>

```python
storage: ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference</a>

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.imageInput"></a>

```python
image_input: IResolvable | typing.List[ManagedDevopsPoolVirtualMachineScaleSetFabricImage]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>]

---

##### `os_disk_storage_account_type_input`<sup>Optional</sup> <a name="os_disk_storage_account_type_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountTypeInput"></a>

```python
os_disk_storage_account_type_input: str
```

- *Type:* str

---

##### `security_input`<sup>Optional</sup> <a name="security_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.securityInput"></a>

```python
security_input: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storageInput"></a>

```python
storage_input: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `os_disk_storage_account_type`<sup>Required</sup> <a name="os_disk_storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType"></a>

```python
os_disk_storage_account_type: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolVirtualMachineScaleSetFabric
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreLocation">reset_certificate_store_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreName">reset_certificate_store_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetKeyExportEnabled">reset_key_export_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_store_location` <a name="reset_certificate_store_location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreLocation"></a>

```python
def reset_certificate_store_location() -> None
```

##### `reset_certificate_store_name` <a name="reset_certificate_store_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreName"></a>

```python
def reset_certificate_store_name() -> None
```

##### `reset_key_export_enabled` <a name="reset_key_export_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetKeyExportEnabled"></a>

```python
def reset_key_export_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocationInput">certificate_store_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreNameInput">certificate_store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabledInput">key_export_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIdsInput">key_vault_certificate_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation">certificate_store_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName">certificate_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled">key_export_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds">key_vault_certificate_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_store_location_input`<sup>Optional</sup> <a name="certificate_store_location_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocationInput"></a>

```python
certificate_store_location_input: str
```

- *Type:* str

---

##### `certificate_store_name_input`<sup>Optional</sup> <a name="certificate_store_name_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreNameInput"></a>

```python
certificate_store_name_input: str
```

- *Type:* str

---

##### `key_export_enabled_input`<sup>Optional</sup> <a name="key_export_enabled_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabledInput"></a>

```python
key_export_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_vault_certificate_ids_input`<sup>Optional</sup> <a name="key_vault_certificate_ids_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIdsInput"></a>

```python
key_vault_certificate_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_store_location`<sup>Required</sup> <a name="certificate_store_location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation"></a>

```python
certificate_store_location: str
```

- *Type:* str

---

##### `certificate_store_name`<sup>Required</sup> <a name="certificate_store_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName"></a>

```python
certificate_store_name: str
```

- *Type:* str

---

##### `key_export_enabled`<sup>Required</sup> <a name="key_export_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled"></a>

```python
key_export_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_vault_certificate_ids`<sup>Required</sup> <a name="key_vault_certificate_ids" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds"></a>

```python
key_vault_certificate_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement">put_key_vault_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetInteractiveLogonEnabled">reset_interactive_logon_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetKeyVaultManagement">reset_key_vault_management</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_vault_management` <a name="put_key_vault_management" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement"></a>

```python
def put_key_vault_management(
  key_vault_certificate_ids: typing.List[str],
  certificate_store_location: str = None,
  certificate_store_name: str = None,
  key_export_enabled: bool | IResolvable = None
) -> None
```

###### `key_vault_certificate_ids`<sup>Required</sup> <a name="key_vault_certificate_ids" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement.parameter.keyVaultCertificateIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}.

---

###### `certificate_store_location`<sup>Optional</sup> <a name="certificate_store_location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement.parameter.certificateStoreLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}.

---

###### `certificate_store_name`<sup>Optional</sup> <a name="certificate_store_name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement.parameter.certificateStoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}.

---

###### `key_export_enabled`<sup>Optional</sup> <a name="key_export_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement.parameter.keyExportEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}.

---

##### `reset_interactive_logon_enabled` <a name="reset_interactive_logon_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetInteractiveLogonEnabled"></a>

```python
def reset_interactive_logon_enabled() -> None
```

##### `reset_key_vault_management` <a name="reset_key_vault_management" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetKeyVaultManagement"></a>

```python
def reset_key_vault_management() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement">key_vault_management</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabledInput">interactive_logon_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagementInput">key_vault_management_input</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled">interactive_logon_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_management`<sup>Required</sup> <a name="key_vault_management" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement"></a>

```python
key_vault_management: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference</a>

---

##### `interactive_logon_enabled_input`<sup>Optional</sup> <a name="interactive_logon_enabled_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabledInput"></a>

```python
interactive_logon_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_vault_management_input`<sup>Optional</sup> <a name="key_vault_management_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagementInput"></a>

```python
key_vault_management_input: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---

##### `interactive_logon_enabled`<sup>Required</sup> <a name="interactive_logon_enabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled"></a>

```python
interactive_logon_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import managed_devops_pool

managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetCaching">reset_caching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetDriveLetter">reset_drive_letter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetStorageAccountType">reset_storage_account_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_caching` <a name="reset_caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetCaching"></a>

```python
def reset_caching() -> None
```

##### `reset_drive_letter` <a name="reset_drive_letter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetDriveLetter"></a>

```python
def reset_drive_letter() -> None
```

##### `reset_storage_account_type` <a name="reset_storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetStorageAccountType"></a>

```python
def reset_storage_account_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.cachingInput">caching_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGbInput">disk_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetterInput">drive_letter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountTypeInput">storage_account_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching">caching</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb">disk_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter">drive_letter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType">storage_account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `caching_input`<sup>Optional</sup> <a name="caching_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.cachingInput"></a>

```python
caching_input: str
```

- *Type:* str

---

##### `disk_size_in_gb_input`<sup>Optional</sup> <a name="disk_size_in_gb_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGbInput"></a>

```python
disk_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drive_letter_input`<sup>Optional</sup> <a name="drive_letter_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetterInput"></a>

```python
drive_letter_input: str
```

- *Type:* str

---

##### `storage_account_type_input`<sup>Optional</sup> <a name="storage_account_type_input" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountTypeInput"></a>

```python
storage_account_type_input: str
```

- *Type:* str

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching"></a>

```python
caching: str
```

- *Type:* str

---

##### `disk_size_in_gb`<sup>Required</sup> <a name="disk_size_in_gb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb"></a>

```python
disk_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `drive_letter`<sup>Required</sup> <a name="drive_letter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter"></a>

```python
drive_letter: str
```

- *Type:* str

---

##### `storage_account_type`<sup>Required</sup> <a name="storage_account_type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType"></a>

```python
storage_account_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue"></a>

```python
internal_value: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---



