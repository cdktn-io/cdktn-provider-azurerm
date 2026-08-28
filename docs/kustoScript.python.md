# `kustoScript` Submodule <a name="`kustoScript` Submodule" id="@cdktn/provider-azurerm.kustoScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoScript <a name="KustoScript" id="@cdktn/provider-azurerm.kustoScript.KustoScript"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script azurerm_kusto_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScript(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_id: str,
  name: str,
  continue_on_errors_enabled: bool | IResolvable = None,
  force_an_update_when_value_changed: str = None,
  id: str = None,
  principal_permissions_action: str = None,
  sas_token: str = None,
  script_content: str = None,
  script_level: str = None,
  timeouts: KustoScriptTimeouts = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#database_id KustoScript#database_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#name KustoScript#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.continueOnErrorsEnabled">continue_on_errors_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#continue_on_errors_enabled KustoScript#continue_on_errors_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.forceAnUpdateWhenValueChanged">force_an_update_when_value_changed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#force_an_update_when_value_changed KustoScript#force_an_update_when_value_changed}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#id KustoScript#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.principalPermissionsAction">principal_permissions_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#principal_permissions_action KustoScript#principal_permissions_action}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.sasToken">sas_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#sas_token KustoScript#sas_token}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.scriptContent">script_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_content KustoScript#script_content}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.scriptLevel">script_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_level KustoScript#script_level}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#url KustoScript#url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#database_id KustoScript#database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#name KustoScript#name}.

---

##### `continue_on_errors_enabled`<sup>Optional</sup> <a name="continue_on_errors_enabled" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.continueOnErrorsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#continue_on_errors_enabled KustoScript#continue_on_errors_enabled}.

---

##### `force_an_update_when_value_changed`<sup>Optional</sup> <a name="force_an_update_when_value_changed" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.forceAnUpdateWhenValueChanged"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#force_an_update_when_value_changed KustoScript#force_an_update_when_value_changed}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#id KustoScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_permissions_action`<sup>Optional</sup> <a name="principal_permissions_action" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.principalPermissionsAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#principal_permissions_action KustoScript#principal_permissions_action}.

---

##### `sas_token`<sup>Optional</sup> <a name="sas_token" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.sasToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#sas_token KustoScript#sas_token}.

---

##### `script_content`<sup>Optional</sup> <a name="script_content" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.scriptContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_content KustoScript#script_content}.

---

##### `script_level`<sup>Optional</sup> <a name="script_level" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.scriptLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_level KustoScript#script_level}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#timeouts KustoScript#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-azurerm.kustoScript.KustoScript.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#url KustoScript#url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetContinueOnErrorsEnabled">reset_continue_on_errors_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetForceAnUpdateWhenValueChanged">reset_force_an_update_when_value_changed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetPrincipalPermissionsAction">reset_principal_permissions_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetSasToken">reset_sas_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetScriptContent">reset_script_content</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetScriptLevel">reset_script_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.kustoScript.KustoScript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kustoScript.KustoScript.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kustoScript.KustoScript.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.kustoScript.KustoScript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kustoScript.KustoScript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kustoScript.KustoScript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.kustoScript.KustoScript.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.kustoScript.KustoScript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.kustoScript.KustoScript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.kustoScript.KustoScript.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.kustoScript.KustoScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.kustoScript.KustoScript.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.kustoScript.KustoScript.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoScript.KustoScript.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.kustoScript.KustoScript.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kustoScript.KustoScript.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#create KustoScript#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoScript.KustoScript.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#delete KustoScript#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kustoScript.KustoScript.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#read KustoScript#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kustoScript.KustoScript.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#update KustoScript#update}.

---

##### `reset_continue_on_errors_enabled` <a name="reset_continue_on_errors_enabled" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetContinueOnErrorsEnabled"></a>

```python
def reset_continue_on_errors_enabled() -> None
```

##### `reset_force_an_update_when_value_changed` <a name="reset_force_an_update_when_value_changed" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetForceAnUpdateWhenValueChanged"></a>

```python
def reset_force_an_update_when_value_changed() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_permissions_action` <a name="reset_principal_permissions_action" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetPrincipalPermissionsAction"></a>

```python
def reset_principal_permissions_action() -> None
```

##### `reset_sas_token` <a name="reset_sas_token" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetSasToken"></a>

```python
def reset_sas_token() -> None
```

##### `reset_script_content` <a name="reset_script_content" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetScriptContent"></a>

```python
def reset_script_content() -> None
```

##### `reset_script_level` <a name="reset_script_level" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetScriptLevel"></a>

```python
def reset_script_level() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-azurerm.kustoScript.KustoScript.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KustoScript resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.kustoScript.KustoScript.isConstruct"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScript.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoScript.KustoScript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.kustoScript.KustoScript.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoScript.KustoScript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.kustoScript.KustoScript.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScript.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kustoScript.KustoScript.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.kustoScript.KustoScript.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScript.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KustoScript resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kustoScript.KustoScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KustoScript to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KustoScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoScript.KustoScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KustoScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference">KustoScriptTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.continueOnErrorsEnabledInput">continue_on_errors_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.forceAnUpdateWhenValueChangedInput">force_an_update_when_value_changed_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.principalPermissionsActionInput">principal_permissions_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.sasTokenInput">sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptContentInput">script_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptLevelInput">script_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.continueOnErrorsEnabled">continue_on_errors_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.forceAnUpdateWhenValueChanged">force_an_update_when_value_changed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.principalPermissionsAction">principal_permissions_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptContent">script_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptLevel">script_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.timeouts"></a>

```python
timeouts: KustoScriptTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference">KustoScriptTimeoutsOutputReference</a>

---

##### `continue_on_errors_enabled_input`<sup>Optional</sup> <a name="continue_on_errors_enabled_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.continueOnErrorsEnabledInput"></a>

```python
continue_on_errors_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `force_an_update_when_value_changed_input`<sup>Optional</sup> <a name="force_an_update_when_value_changed_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.forceAnUpdateWhenValueChangedInput"></a>

```python
force_an_update_when_value_changed_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principal_permissions_action_input`<sup>Optional</sup> <a name="principal_permissions_action_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.principalPermissionsActionInput"></a>

```python
principal_permissions_action_input: str
```

- *Type:* str

---

##### `sas_token_input`<sup>Optional</sup> <a name="sas_token_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.sasTokenInput"></a>

```python
sas_token_input: str
```

- *Type:* str

---

##### `script_content_input`<sup>Optional</sup> <a name="script_content_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptContentInput"></a>

```python
script_content_input: str
```

- *Type:* str

---

##### `script_level_input`<sup>Optional</sup> <a name="script_level_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptLevelInput"></a>

```python
script_level_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | KustoScriptTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a>

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `continue_on_errors_enabled`<sup>Required</sup> <a name="continue_on_errors_enabled" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.continueOnErrorsEnabled"></a>

```python
continue_on_errors_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `force_an_update_when_value_changed`<sup>Required</sup> <a name="force_an_update_when_value_changed" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.forceAnUpdateWhenValueChanged"></a>

```python
force_an_update_when_value_changed: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal_permissions_action`<sup>Required</sup> <a name="principal_permissions_action" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.principalPermissionsAction"></a>

```python
principal_permissions_action: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `script_content`<sup>Required</sup> <a name="script_content" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptContent"></a>

```python
script_content: str
```

- *Type:* str

---

##### `script_level`<sup>Required</sup> <a name="script_level" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.scriptLevel"></a>

```python
script_level: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kustoScript.KustoScript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KustoScriptConfig <a name="KustoScriptConfig" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScriptConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database_id: str,
  name: str,
  continue_on_errors_enabled: bool | IResolvable = None,
  force_an_update_when_value_changed: str = None,
  id: str = None,
  principal_permissions_action: str = None,
  sas_token: str = None,
  script_content: str = None,
  script_level: str = None,
  timeouts: KustoScriptTimeouts = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#database_id KustoScript#database_id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#name KustoScript#name}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.continueOnErrorsEnabled">continue_on_errors_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#continue_on_errors_enabled KustoScript#continue_on_errors_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.forceAnUpdateWhenValueChanged">force_an_update_when_value_changed</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#force_an_update_when_value_changed KustoScript#force_an_update_when_value_changed}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#id KustoScript#id}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.principalPermissionsAction">principal_permissions_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#principal_permissions_action KustoScript#principal_permissions_action}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.sasToken">sas_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#sas_token KustoScript#sas_token}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.scriptContent">script_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_content KustoScript#script_content}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.scriptLevel">script_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_level KustoScript#script_level}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#url KustoScript#url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#database_id KustoScript#database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#name KustoScript#name}.

---

##### `continue_on_errors_enabled`<sup>Optional</sup> <a name="continue_on_errors_enabled" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.continueOnErrorsEnabled"></a>

```python
continue_on_errors_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#continue_on_errors_enabled KustoScript#continue_on_errors_enabled}.

---

##### `force_an_update_when_value_changed`<sup>Optional</sup> <a name="force_an_update_when_value_changed" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.forceAnUpdateWhenValueChanged"></a>

```python
force_an_update_when_value_changed: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#force_an_update_when_value_changed KustoScript#force_an_update_when_value_changed}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#id KustoScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_permissions_action`<sup>Optional</sup> <a name="principal_permissions_action" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.principalPermissionsAction"></a>

```python
principal_permissions_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#principal_permissions_action KustoScript#principal_permissions_action}.

---

##### `sas_token`<sup>Optional</sup> <a name="sas_token" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#sas_token KustoScript#sas_token}.

---

##### `script_content`<sup>Optional</sup> <a name="script_content" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.scriptContent"></a>

```python
script_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_content KustoScript#script_content}.

---

##### `script_level`<sup>Optional</sup> <a name="script_level" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.scriptLevel"></a>

```python
script_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#script_level KustoScript#script_level}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.timeouts"></a>

```python
timeouts: KustoScriptTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#timeouts KustoScript#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-azurerm.kustoScript.KustoScriptConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#url KustoScript#url}.

---

### KustoScriptTimeouts <a name="KustoScriptTimeouts" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScriptTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#create KustoScript#create}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#delete KustoScript#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#read KustoScript#read}. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#update KustoScript#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#create KustoScript#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#delete KustoScript#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#read KustoScript#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kusto_script#update KustoScript#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoScriptTimeoutsOutputReference <a name="KustoScriptTimeoutsOutputReference" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import kusto_script

kustoScript.KustoScriptTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.kustoScript.KustoScriptTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KustoScriptTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kustoScript.KustoScriptTimeouts">KustoScriptTimeouts</a>

---



