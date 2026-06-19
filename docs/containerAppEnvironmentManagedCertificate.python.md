# `containerAppEnvironmentManagedCertificate` Submodule <a name="`containerAppEnvironmentManagedCertificate` Submodule" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentManagedCertificate <a name="ContainerAppEnvironmentManagedCertificate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate azurerm_container_app_environment_managed_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_app_environment_id: str,
  name: str,
  subject_name: str,
  domain_control_validation: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppEnvironmentManagedCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The Container App Managed Environment ID to configure this Managed Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Container Apps Managed Certificate. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.subjectName">subject_name</a></code> | <code>str</code> | The Subject Name of the Certificate. Must be a valid domain name. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.domainControlValidation">domain_control_validation</a></code> | <code>str</code> | The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* str

The Container App Managed Environment ID to configure this Managed Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#container_app_environment_id ContainerAppEnvironmentManagedCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.name"></a>

- *Type:* str

The name of the Container Apps Managed Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#name ContainerAppEnvironmentManagedCertificate#name}

---

##### `subject_name`<sup>Required</sup> <a name="subject_name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.subjectName"></a>

- *Type:* str

The Subject Name of the Certificate. Must be a valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#subject_name ContainerAppEnvironmentManagedCertificate#subject_name}

---

##### `domain_control_validation`<sup>Optional</sup> <a name="domain_control_validation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.domainControlValidation"></a>

- *Type:* str

The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#domain_control_validation ContainerAppEnvironmentManagedCertificate#domain_control_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#timeouts ContainerAppEnvironmentManagedCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation">reset_domain_control_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}.

---

##### `reset_domain_control_validation` <a name="reset_domain_control_validation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation"></a>

```python
def reset_domain_control_validation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerAppEnvironmentManagedCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerAppEnvironmentManagedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentManagedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken">validation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput">container_app_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput">domain_control_validation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput">subject_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation">domain_control_validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName">subject_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts"></a>

```python
timeouts: ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a>

---

##### `validation_token`<sup>Required</sup> <a name="validation_token" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken"></a>

```python
validation_token: str
```

- *Type:* str

---

##### `container_app_environment_id_input`<sup>Optional</sup> <a name="container_app_environment_id_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput"></a>

```python
container_app_environment_id_input: str
```

- *Type:* str

---

##### `domain_control_validation_input`<sup>Optional</sup> <a name="domain_control_validation_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput"></a>

```python
domain_control_validation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `subject_name_input`<sup>Optional</sup> <a name="subject_name_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput"></a>

```python
subject_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ContainerAppEnvironmentManagedCertificateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

---

##### `domain_control_validation`<sup>Required</sup> <a name="domain_control_validation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation"></a>

```python
domain_control_validation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `subject_name`<sup>Required</sup> <a name="subject_name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName"></a>

```python
subject_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentManagedCertificateConfig <a name="ContainerAppEnvironmentManagedCertificateConfig" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  container_app_environment_id: str,
  name: str,
  subject_name: str,
  domain_control_validation: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppEnvironmentManagedCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The Container App Managed Environment ID to configure this Managed Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name">name</a></code> | <code>str</code> | The name of the Container Apps Managed Certificate. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName">subject_name</a></code> | <code>str</code> | The Subject Name of the Certificate. Must be a valid domain name. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation">domain_control_validation</a></code> | <code>str</code> | The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

The Container App Managed Environment ID to configure this Managed Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#container_app_environment_id ContainerAppEnvironmentManagedCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Container Apps Managed Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#name ContainerAppEnvironmentManagedCertificate#name}

---

##### `subject_name`<sup>Required</sup> <a name="subject_name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName"></a>

```python
subject_name: str
```

- *Type:* str

The Subject Name of the Certificate. Must be a valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#subject_name ContainerAppEnvironmentManagedCertificate#subject_name}

---

##### `domain_control_validation`<sup>Optional</sup> <a name="domain_control_validation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation"></a>

```python
domain_control_validation: str
```

- *Type:* str

The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#domain_control_validation ContainerAppEnvironmentManagedCertificate#domain_control_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts"></a>

```python
timeouts: ContainerAppEnvironmentManagedCertificateTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#timeouts ContainerAppEnvironmentManagedCertificate#timeouts}

---

### ContainerAppEnvironmentManagedCertificateTimeouts <a name="ContainerAppEnvironmentManagedCertificateTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference <a name="ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import container_app_environment_managed_certificate

containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ContainerAppEnvironmentManagedCertificateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---



