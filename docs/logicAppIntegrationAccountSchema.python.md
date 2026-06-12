# `logicAppIntegrationAccountSchema` Submodule <a name="`logicAppIntegrationAccountSchema` Submodule" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppIntegrationAccountSchema <a name="LogicAppIntegrationAccountSchema" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema azurerm_logic_app_integration_account_schema}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  integration_account_name: str,
  name: str,
  resource_group_name: str,
  file_name: str = None,
  id: str = None,
  metadata: str = None,
  timeouts: LogicAppIntegrationAccountSchemaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#content LogicAppIntegrationAccountSchema#content}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.integrationAccountName">integration_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#integration_account_name LogicAppIntegrationAccountSchema#integration_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#name LogicAppIntegrationAccountSchema#name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#resource_group_name LogicAppIntegrationAccountSchema#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.fileName">file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#file_name LogicAppIntegrationAccountSchema#file_name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#id LogicAppIntegrationAccountSchema#id}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#metadata LogicAppIntegrationAccountSchema#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#content LogicAppIntegrationAccountSchema#content}.

---

##### `integration_account_name`<sup>Required</sup> <a name="integration_account_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.integrationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#integration_account_name LogicAppIntegrationAccountSchema#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#name LogicAppIntegrationAccountSchema#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#resource_group_name LogicAppIntegrationAccountSchema#resource_group_name}.

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.fileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#file_name LogicAppIntegrationAccountSchema#file_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#id LogicAppIntegrationAccountSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#metadata LogicAppIntegrationAccountSchema#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#timeouts LogicAppIntegrationAccountSchema#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetFileName">reset_file_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#create LogicAppIntegrationAccountSchema#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#delete LogicAppIntegrationAccountSchema#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#read LogicAppIntegrationAccountSchema#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#update LogicAppIntegrationAccountSchema#update}.

---

##### `reset_file_name` <a name="reset_file_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetFileName"></a>

```python
def reset_file_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LogicAppIntegrationAccountSchema resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isConstruct"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LogicAppIntegrationAccountSchema resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LogicAppIntegrationAccountSchema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LogicAppIntegrationAccountSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogicAppIntegrationAccountSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference">LogicAppIntegrationAccountSchemaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.fileNameInput">file_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.integrationAccountNameInput">integration_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.integrationAccountName">integration_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.timeouts"></a>

```python
timeouts: LogicAppIntegrationAccountSchemaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference">LogicAppIntegrationAccountSchemaTimeoutsOutputReference</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_name_input`<sup>Optional</sup> <a name="file_name_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.fileNameInput"></a>

```python
file_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_account_name_input`<sup>Optional</sup> <a name="integration_account_name_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.integrationAccountNameInput"></a>

```python
integration_account_name_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | LogicAppIntegrationAccountSchemaTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_account_name`<sup>Required</sup> <a name="integration_account_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.integrationAccountName"></a>

```python
integration_account_name: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppIntegrationAccountSchemaConfig <a name="LogicAppIntegrationAccountSchemaConfig" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  content: str,
  integration_account_name: str,
  name: str,
  resource_group_name: str,
  file_name: str = None,
  id: str = None,
  metadata: str = None,
  timeouts: LogicAppIntegrationAccountSchemaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#content LogicAppIntegrationAccountSchema#content}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.integrationAccountName">integration_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#integration_account_name LogicAppIntegrationAccountSchema#integration_account_name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#name LogicAppIntegrationAccountSchema#name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#resource_group_name LogicAppIntegrationAccountSchema#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.fileName">file_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#file_name LogicAppIntegrationAccountSchema#file_name}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#id LogicAppIntegrationAccountSchema#id}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#metadata LogicAppIntegrationAccountSchema#metadata}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#content LogicAppIntegrationAccountSchema#content}.

---

##### `integration_account_name`<sup>Required</sup> <a name="integration_account_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.integrationAccountName"></a>

```python
integration_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#integration_account_name LogicAppIntegrationAccountSchema#integration_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#name LogicAppIntegrationAccountSchema#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#resource_group_name LogicAppIntegrationAccountSchema#resource_group_name}.

---

##### `file_name`<sup>Optional</sup> <a name="file_name" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#file_name LogicAppIntegrationAccountSchema#file_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#id LogicAppIntegrationAccountSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#metadata LogicAppIntegrationAccountSchema#metadata}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaConfig.property.timeouts"></a>

```python
timeouts: LogicAppIntegrationAccountSchemaTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#timeouts LogicAppIntegrationAccountSchema#timeouts}

---

### LogicAppIntegrationAccountSchemaTimeouts <a name="LogicAppIntegrationAccountSchemaTimeouts" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#create LogicAppIntegrationAccountSchema#create}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#delete LogicAppIntegrationAccountSchema#delete}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#read LogicAppIntegrationAccountSchema#read}. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#update LogicAppIntegrationAccountSchema#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#create LogicAppIntegrationAccountSchema#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#delete LogicAppIntegrationAccountSchema#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#read LogicAppIntegrationAccountSchema#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/logic_app_integration_account_schema#update LogicAppIntegrationAccountSchema#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppIntegrationAccountSchemaTimeoutsOutputReference <a name="LogicAppIntegrationAccountSchemaTimeoutsOutputReference" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import logic_app_integration_account_schema

logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LogicAppIntegrationAccountSchemaTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.logicAppIntegrationAccountSchema.LogicAppIntegrationAccountSchemaTimeouts">LogicAppIntegrationAccountSchemaTimeouts</a>

---



