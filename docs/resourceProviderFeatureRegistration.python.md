# `resourceProviderFeatureRegistration` Submodule <a name="`resourceProviderFeatureRegistration` Submodule" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceProviderFeatureRegistration <a name="ResourceProviderFeatureRegistration" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration azurerm_resource_provider_feature_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration(
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
  provider_name: str,
  id: str = None,
  timeouts: ResourceProviderFeatureRegistrationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#timeouts ResourceProviderFeatureRegistration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResourceProviderFeatureRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResourceProviderFeatureRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourceProviderFeatureRegistration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourceProviderFeatureRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourceProviderFeatureRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference">ResourceProviderFeatureRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeouts"></a>

```python
timeouts: ResourceProviderFeatureRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference">ResourceProviderFeatureRegistrationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ResourceProviderFeatureRegistrationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceProviderFeatureRegistrationConfig <a name="ResourceProviderFeatureRegistrationConfig" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_name: str,
  id: str = None,
  timeouts: ResourceProviderFeatureRegistrationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#name ResourceProviderFeatureRegistration#name}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#provider_name ResourceProviderFeatureRegistration#provider_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#id ResourceProviderFeatureRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationConfig.property.timeouts"></a>

```python
timeouts: ResourceProviderFeatureRegistrationTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#timeouts ResourceProviderFeatureRegistration#timeouts}

---

### ResourceProviderFeatureRegistrationTimeouts <a name="ResourceProviderFeatureRegistrationTimeouts" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#create ResourceProviderFeatureRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#delete ResourceProviderFeatureRegistration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/resource_provider_feature_registration#read ResourceProviderFeatureRegistration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceProviderFeatureRegistrationTimeoutsOutputReference <a name="ResourceProviderFeatureRegistrationTimeoutsOutputReference" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import resource_provider_feature_registration

resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ResourceProviderFeatureRegistrationTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.resourceProviderFeatureRegistration.ResourceProviderFeatureRegistrationTimeouts">ResourceProviderFeatureRegistrationTimeouts</a>

---



