# `automationRuntimeEnvironmentPackage` Submodule <a name="`automationRuntimeEnvironmentPackage` Submodule" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuntimeEnvironmentPackage <a name="AutomationRuntimeEnvironmentPackage" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package azurerm_automation_runtime_environment_package}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  automation_runtime_environment_id: str,
  content_uri: str,
  name: str,
  content_version: str = None,
  hash_algorithm: str = None,
  hash_value: str = None,
  id: str = None,
  timeouts: AutomationRuntimeEnvironmentPackageTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.automationRuntimeEnvironmentId">automation_runtime_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentUri">content_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentVersion">content_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashValue">hash_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `automation_runtime_environment_id`<sup>Required</sup> <a name="automation_runtime_environment_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.automationRuntimeEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}.

---

##### `content_uri`<sup>Required</sup> <a name="content_uri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}.

---

##### `content_version`<sup>Optional</sup> <a name="content_version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}.

---

##### `hash_algorithm`<sup>Optional</sup> <a name="hash_algorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}.

---

##### `hash_value`<sup>Optional</sup> <a name="hash_value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion">reset_content_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm">reset_hash_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue">reset_hash_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}.

---

##### `reset_content_version` <a name="reset_content_version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion"></a>

```python
def reset_content_version() -> None
```

##### `reset_hash_algorithm` <a name="reset_hash_algorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm"></a>

```python
def reset_hash_algorithm() -> None
```

##### `reset_hash_value` <a name="reset_hash_value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue"></a>

```python
def reset_hash_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationRuntimeEnvironmentPackage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationRuntimeEnvironmentPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AutomationRuntimeEnvironmentPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes">size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput">automation_runtime_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput">content_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput">content_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput">hash_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput">hash_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId">automation_runtime_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri">content_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion">content_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue">hash_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes"></a>

```python
size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts"></a>

```python
timeouts: AutomationRuntimeEnvironmentPackageTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `automation_runtime_environment_id_input`<sup>Optional</sup> <a name="automation_runtime_environment_id_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput"></a>

```python
automation_runtime_environment_id_input: str
```

- *Type:* str

---

##### `content_uri_input`<sup>Optional</sup> <a name="content_uri_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput"></a>

```python
content_uri_input: str
```

- *Type:* str

---

##### `content_version_input`<sup>Optional</sup> <a name="content_version_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput"></a>

```python
content_version_input: str
```

- *Type:* str

---

##### `hash_algorithm_input`<sup>Optional</sup> <a name="hash_algorithm_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput"></a>

```python
hash_algorithm_input: str
```

- *Type:* str

---

##### `hash_value_input`<sup>Optional</sup> <a name="hash_value_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput"></a>

```python
hash_value_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | AutomationRuntimeEnvironmentPackageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---

##### `automation_runtime_environment_id`<sup>Required</sup> <a name="automation_runtime_environment_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId"></a>

```python
automation_runtime_environment_id: str
```

- *Type:* str

---

##### `content_uri`<sup>Required</sup> <a name="content_uri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri"></a>

```python
content_uri: str
```

- *Type:* str

---

##### `content_version`<sup>Required</sup> <a name="content_version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion"></a>

```python
content_version: str
```

- *Type:* str

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `hash_value`<sup>Required</sup> <a name="hash_value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue"></a>

```python
hash_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuntimeEnvironmentPackageConfig <a name="AutomationRuntimeEnvironmentPackageConfig" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  automation_runtime_environment_id: str,
  content_uri: str,
  name: str,
  content_version: str = None,
  hash_algorithm: str = None,
  hash_value: str = None,
  id: str = None,
  timeouts: AutomationRuntimeEnvironmentPackageTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId">automation_runtime_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri">content_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion">content_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue">hash_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `automation_runtime_environment_id`<sup>Required</sup> <a name="automation_runtime_environment_id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId"></a>

```python
automation_runtime_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}.

---

##### `content_uri`<sup>Required</sup> <a name="content_uri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri"></a>

```python
content_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}.

---

##### `content_version`<sup>Optional</sup> <a name="content_version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion"></a>

```python
content_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}.

---

##### `hash_algorithm`<sup>Optional</sup> <a name="hash_algorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}.

---

##### `hash_value`<sup>Optional</sup> <a name="hash_value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue"></a>

```python
hash_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts"></a>

```python
timeouts: AutomationRuntimeEnvironmentPackageTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}

---

### AutomationRuntimeEnvironmentPackageTimeouts <a name="AutomationRuntimeEnvironmentPackageTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRuntimeEnvironmentPackageTimeoutsOutputReference <a name="AutomationRuntimeEnvironmentPackageTimeoutsOutputReference" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import automation_runtime_environment_package

automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AutomationRuntimeEnvironmentPackageTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---



