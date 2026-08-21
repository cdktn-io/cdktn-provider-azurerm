# `resourceGroupPolicyExemption` Submodule <a name="`resourceGroupPolicyExemption` Submodule" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupPolicyExemption <a name="ResourceGroupPolicyExemption" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption azurerm_resource_group_policy_exemption}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemption(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exemption_category: str,
  name: str,
  policy_assignment_id: str,
  resource_group_id: str,
  description: str = None,
  display_name: str = None,
  expires_on: str = None,
  id: str = None,
  metadata: str = None,
  policy_definition_reference_ids: typing.List[str] = None,
  timeouts: ResourceGroupPolicyExemptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.exemptionCategory">exemption_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#exemption_category ResourceGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#name ResourceGroupPolicyExemption#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_assignment_id ResourceGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#resource_group_id ResourceGroupPolicyExemption#resource_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#description ResourceGroupPolicyExemption#description}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#display_name ResourceGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#expires_on ResourceGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#id ResourceGroupPolicyExemption#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#metadata ResourceGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds">policy_definition_reference_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_definition_reference_ids ResourceGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exemption_category`<sup>Required</sup> <a name="exemption_category" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.exemptionCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#exemption_category ResourceGroupPolicyExemption#exemption_category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#name ResourceGroupPolicyExemption#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.policyAssignmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_assignment_id ResourceGroupPolicyExemption#policy_assignment_id}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.resourceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#resource_group_id ResourceGroupPolicyExemption#resource_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#description ResourceGroupPolicyExemption#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#display_name ResourceGroupPolicyExemption#display_name}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.expiresOn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#expires_on ResourceGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#id ResourceGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#metadata ResourceGroupPolicyExemption#metadata}.

---

##### `policy_definition_reference_ids`<sup>Optional</sup> <a name="policy_definition_reference_ids" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.policyDefinitionReferenceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_definition_reference_ids ResourceGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#timeouts ResourceGroupPolicyExemption#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetExpiresOn">reset_expires_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetPolicyDefinitionReferenceIds">reset_policy_definition_reference_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#create ResourceGroupPolicyExemption#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#delete ResourceGroupPolicyExemption#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#read ResourceGroupPolicyExemption#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#update ResourceGroupPolicyExemption#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_expires_on` <a name="reset_expires_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetExpiresOn"></a>

```python
def reset_expires_on() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_policy_definition_reference_ids` <a name="reset_policy_definition_reference_ids" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetPolicyDefinitionReferenceIds"></a>

```python
def reset_policy_definition_reference_ids() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResourceGroupPolicyExemption resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isConstruct"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemption.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemption.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemption.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResourceGroupPolicyExemption resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceGroupPolicyExemption to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceGroupPolicyExemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceGroupPolicyExemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference">ResourceGroupPolicyExemptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.exemptionCategoryInput">exemption_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.expiresOnInput">expires_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyAssignmentIdInput">policy_assignment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyDefinitionReferenceIdsInput">policy_definition_reference_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.resourceGroupIdInput">resource_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.exemptionCategory">exemption_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.expiresOn">expires_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyDefinitionReferenceIds">policy_definition_reference_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.timeouts"></a>

```python
timeouts: ResourceGroupPolicyExemptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference">ResourceGroupPolicyExemptionTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exemption_category_input`<sup>Optional</sup> <a name="exemption_category_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.exemptionCategoryInput"></a>

```python
exemption_category_input: str
```

- *Type:* str

---

##### `expires_on_input`<sup>Optional</sup> <a name="expires_on_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.expiresOnInput"></a>

```python
expires_on_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_assignment_id_input`<sup>Optional</sup> <a name="policy_assignment_id_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyAssignmentIdInput"></a>

```python
policy_assignment_id_input: str
```

- *Type:* str

---

##### `policy_definition_reference_ids_input`<sup>Optional</sup> <a name="policy_definition_reference_ids_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyDefinitionReferenceIdsInput"></a>

```python
policy_definition_reference_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_id_input`<sup>Optional</sup> <a name="resource_group_id_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.resourceGroupIdInput"></a>

```python
resource_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ResourceGroupPolicyExemptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exemption_category`<sup>Required</sup> <a name="exemption_category" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.exemptionCategory"></a>

```python
exemption_category: str
```

- *Type:* str

---

##### `expires_on`<sup>Required</sup> <a name="expires_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

---

##### `policy_definition_reference_ids`<sup>Required</sup> <a name="policy_definition_reference_ids" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.policyDefinitionReferenceIds"></a>

```python
policy_definition_reference_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemption.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupPolicyExemptionConfig <a name="ResourceGroupPolicyExemptionConfig" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  exemption_category: str,
  name: str,
  policy_assignment_id: str,
  resource_group_id: str,
  description: str = None,
  display_name: str = None,
  expires_on: str = None,
  id: str = None,
  metadata: str = None,
  policy_definition_reference_ids: typing.List[str] = None,
  timeouts: ResourceGroupPolicyExemptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.exemptionCategory">exemption_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#exemption_category ResourceGroupPolicyExemption#exemption_category}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#name ResourceGroupPolicyExemption#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.policyAssignmentId">policy_assignment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_assignment_id ResourceGroupPolicyExemption#policy_assignment_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.resourceGroupId">resource_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#resource_group_id ResourceGroupPolicyExemption#resource_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#description ResourceGroupPolicyExemption#description}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#display_name ResourceGroupPolicyExemption#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.expiresOn">expires_on</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#expires_on ResourceGroupPolicyExemption#expires_on}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#id ResourceGroupPolicyExemption#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#metadata ResourceGroupPolicyExemption#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds">policy_definition_reference_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_definition_reference_ids ResourceGroupPolicyExemption#policy_definition_reference_ids}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exemption_category`<sup>Required</sup> <a name="exemption_category" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.exemptionCategory"></a>

```python
exemption_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#exemption_category ResourceGroupPolicyExemption#exemption_category}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#name ResourceGroupPolicyExemption#name}.

---

##### `policy_assignment_id`<sup>Required</sup> <a name="policy_assignment_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.policyAssignmentId"></a>

```python
policy_assignment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_assignment_id ResourceGroupPolicyExemption#policy_assignment_id}.

---

##### `resource_group_id`<sup>Required</sup> <a name="resource_group_id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.resourceGroupId"></a>

```python
resource_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#resource_group_id ResourceGroupPolicyExemption#resource_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#description ResourceGroupPolicyExemption#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#display_name ResourceGroupPolicyExemption#display_name}.

---

##### `expires_on`<sup>Optional</sup> <a name="expires_on" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.expiresOn"></a>

```python
expires_on: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#expires_on ResourceGroupPolicyExemption#expires_on}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#id ResourceGroupPolicyExemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#metadata ResourceGroupPolicyExemption#metadata}.

---

##### `policy_definition_reference_ids`<sup>Optional</sup> <a name="policy_definition_reference_ids" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.policyDefinitionReferenceIds"></a>

```python
policy_definition_reference_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#policy_definition_reference_ids ResourceGroupPolicyExemption#policy_definition_reference_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionConfig.property.timeouts"></a>

```python
timeouts: ResourceGroupPolicyExemptionTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#timeouts ResourceGroupPolicyExemption#timeouts}

---

### ResourceGroupPolicyExemptionTimeouts <a name="ResourceGroupPolicyExemptionTimeouts" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#create ResourceGroupPolicyExemption#create}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#delete ResourceGroupPolicyExemption#delete}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#read ResourceGroupPolicyExemption#read}. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#update ResourceGroupPolicyExemption#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#create ResourceGroupPolicyExemption#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#delete ResourceGroupPolicyExemption#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#read ResourceGroupPolicyExemption#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/resource_group_policy_exemption#update ResourceGroupPolicyExemption#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupPolicyExemptionTimeoutsOutputReference <a name="ResourceGroupPolicyExemptionTimeoutsOutputReference" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_group_policy_exemption

resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceGroupPolicyExemptionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.resourceGroupPolicyExemption.ResourceGroupPolicyExemptionTimeouts">ResourceGroupPolicyExemptionTimeouts</a>

---



