# `storageDiscoveryWorkspace` Submodule <a name="`storageDiscoveryWorkspace` Submodule" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDiscoveryWorkspace <a name="StorageDiscoveryWorkspace" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace azurerm_storage_discovery_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspace(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  resource_group_name: str,
  scope: IResolvable | typing.List[StorageDiscoveryWorkspaceScope],
  workspace_roots: typing.List[str],
  description: str = None,
  id: str = None,
  sku: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StorageDiscoveryWorkspaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope">scope</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]</code> | scope block. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.workspaceRoots">workspace_roots</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#scope StorageDiscoveryWorkspace#scope}

---

##### `workspace_roots`<sup>Required</sup> <a name="workspace_roots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.workspaceRoots"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.sku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#timeouts StorageDiscoveryWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku">reset_sku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope"></a>

```python
def put_scope(
  value: IResolvable | typing.List[StorageDiscoveryWorkspaceScope]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sku` <a name="reset_sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku"></a>

```python
def reset_sku() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageDiscoveryWorkspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageDiscoveryWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StorageDiscoveryWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput">scope_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput">sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput">workspace_roots_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku">sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots">workspace_roots</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope"></a>

```python
scope: StorageDiscoveryWorkspaceScopeList
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts"></a>

```python
timeouts: StorageDiscoveryWorkspaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput"></a>

```python
scope_input: IResolvable | typing.List[StorageDiscoveryWorkspaceScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]

---

##### `sku_input`<sup>Optional</sup> <a name="sku_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput"></a>

```python
sku_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | StorageDiscoveryWorkspaceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---

##### `workspace_roots_input`<sup>Optional</sup> <a name="workspace_roots_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput"></a>

```python
workspace_roots_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku"></a>

```python
sku: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_roots`<sup>Required</sup> <a name="workspace_roots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots"></a>

```python
workspace_roots: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDiscoveryWorkspaceConfig <a name="StorageDiscoveryWorkspaceConfig" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  resource_group_name: str,
  scope: IResolvable | typing.List[StorageDiscoveryWorkspaceScope],
  workspace_roots: typing.List[str],
  description: str = None,
  id: str = None,
  sku: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StorageDiscoveryWorkspaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope">scope</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]</code> | scope block. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots">workspace_roots</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku">sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope"></a>

```python
scope: IResolvable | typing.List[StorageDiscoveryWorkspaceScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#scope StorageDiscoveryWorkspace#scope}

---

##### `workspace_roots`<sup>Required</sup> <a name="workspace_roots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots"></a>

```python
workspace_roots: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku"></a>

```python
sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts"></a>

```python
timeouts: StorageDiscoveryWorkspaceTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#timeouts StorageDiscoveryWorkspace#timeouts}

---

### StorageDiscoveryWorkspaceScope <a name="StorageDiscoveryWorkspaceScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope(
  display_name: str,
  resource_types: typing.List[str],
  tag_keys_only: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly">tag_keys_only</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}.

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}.

---

##### `tag_keys_only`<sup>Optional</sup> <a name="tag_keys_only" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly"></a>

```python
tag_keys_only: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

### StorageDiscoveryWorkspaceTimeouts <a name="StorageDiscoveryWorkspaceTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDiscoveryWorkspaceScopeList <a name="StorageDiscoveryWorkspaceScopeList" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StorageDiscoveryWorkspaceScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[StorageDiscoveryWorkspaceScope]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>]

---


### StorageDiscoveryWorkspaceScopeOutputReference <a name="StorageDiscoveryWorkspaceScopeOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly">reset_tag_keys_only</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tag_keys_only` <a name="reset_tag_keys_only" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly"></a>

```python
def reset_tag_keys_only() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput">resource_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput">tag_keys_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes">resource_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly">tag_keys_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput"></a>

```python
resource_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_keys_only_input`<sup>Optional</sup> <a name="tag_keys_only_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput"></a>

```python
tag_keys_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes"></a>

```python
resource_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_keys_only`<sup>Required</sup> <a name="tag_keys_only" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly"></a>

```python
tag_keys_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageDiscoveryWorkspaceScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>

---


### StorageDiscoveryWorkspaceTimeoutsOutputReference <a name="StorageDiscoveryWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import storage_discovery_workspace

storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | StorageDiscoveryWorkspaceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---



