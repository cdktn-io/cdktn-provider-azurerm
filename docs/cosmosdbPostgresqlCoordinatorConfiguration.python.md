# `cosmosdbPostgresqlCoordinatorConfiguration` Submodule <a name="`cosmosdbPostgresqlCoordinatorConfiguration` Submodule" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlCoordinatorConfiguration <a name="CosmosdbPostgresqlCoordinatorConfiguration" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration azurerm_cosmosdb_postgresql_coordinator_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  name: str,
  value: str,
  id: str = None,
  timeouts: CosmosdbPostgresqlCoordinatorConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#cluster_id CosmosdbPostgresqlCoordinatorConfiguration#cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#name CosmosdbPostgresqlCoordinatorConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#value CosmosdbPostgresqlCoordinatorConfiguration#value}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#id CosmosdbPostgresqlCoordinatorConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#cluster_id CosmosdbPostgresqlCoordinatorConfiguration#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#name CosmosdbPostgresqlCoordinatorConfiguration#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#value CosmosdbPostgresqlCoordinatorConfiguration#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#id CosmosdbPostgresqlCoordinatorConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#timeouts CosmosdbPostgresqlCoordinatorConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#create CosmosdbPostgresqlCoordinatorConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#delete CosmosdbPostgresqlCoordinatorConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#read CosmosdbPostgresqlCoordinatorConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#update CosmosdbPostgresqlCoordinatorConfiguration#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CosmosdbPostgresqlCoordinatorConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CosmosdbPostgresqlCoordinatorConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbPostgresqlCoordinatorConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbPostgresqlCoordinatorConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CosmosdbPostgresqlCoordinatorConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference">CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeouts"></a>

```python
timeouts: CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference">CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CosmosdbPostgresqlCoordinatorConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlCoordinatorConfigurationConfig <a name="CosmosdbPostgresqlCoordinatorConfigurationConfig" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster_id: str,
  name: str,
  value: str,
  id: str = None,
  timeouts: CosmosdbPostgresqlCoordinatorConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#cluster_id CosmosdbPostgresqlCoordinatorConfiguration#cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#name CosmosdbPostgresqlCoordinatorConfiguration#name}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#value CosmosdbPostgresqlCoordinatorConfiguration#value}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#id CosmosdbPostgresqlCoordinatorConfiguration#id}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#cluster_id CosmosdbPostgresqlCoordinatorConfiguration#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#name CosmosdbPostgresqlCoordinatorConfiguration#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#value CosmosdbPostgresqlCoordinatorConfiguration#value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#id CosmosdbPostgresqlCoordinatorConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationConfig.property.timeouts"></a>

```python
timeouts: CosmosdbPostgresqlCoordinatorConfigurationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#timeouts CosmosdbPostgresqlCoordinatorConfiguration#timeouts}

---

### CosmosdbPostgresqlCoordinatorConfigurationTimeouts <a name="CosmosdbPostgresqlCoordinatorConfigurationTimeouts" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#create CosmosdbPostgresqlCoordinatorConfiguration#create}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#delete CosmosdbPostgresqlCoordinatorConfiguration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#read CosmosdbPostgresqlCoordinatorConfiguration#read}. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#update CosmosdbPostgresqlCoordinatorConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#create CosmosdbPostgresqlCoordinatorConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#delete CosmosdbPostgresqlCoordinatorConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#read CosmosdbPostgresqlCoordinatorConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cosmosdb_postgresql_coordinator_configuration#update CosmosdbPostgresqlCoordinatorConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference <a name="CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import cosmosdb_postgresql_coordinator_configuration

cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CosmosdbPostgresqlCoordinatorConfigurationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.cosmosdbPostgresqlCoordinatorConfiguration.CosmosdbPostgresqlCoordinatorConfigurationTimeouts">CosmosdbPostgresqlCoordinatorConfigurationTimeouts</a>

---



