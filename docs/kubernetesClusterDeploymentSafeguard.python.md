# `kubernetesClusterDeploymentSafeguard` Submodule <a name="`kubernetesClusterDeploymentSafeguard` Submodule" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterDeploymentSafeguard <a name="KubernetesClusterDeploymentSafeguard" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard azurerm_kubernetes_cluster_deployment_safeguard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kubernetes_cluster_id: str,
  level: str,
  excluded_namespaces: typing.List[str] = None,
  id: str = None,
  pod_security_standards_level: str = None,
  timeouts: KubernetesClusterDeploymentSafeguardTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.excludedNamespaces">excluded_namespaces</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.podSecurityStandardsLevel">pod_security_standards_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}.

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}.

---

##### `excluded_namespaces`<sup>Optional</sup> <a name="excluded_namespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.excludedNamespaces"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pod_security_standards_level`<sup>Optional</sup> <a name="pod_security_standards_level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.podSecurityStandardsLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#timeouts KubernetesClusterDeploymentSafeguard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetExcludedNamespaces">reset_excluded_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetPodSecurityStandardsLevel">reset_pod_security_standards_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}.

---

##### `reset_excluded_namespaces` <a name="reset_excluded_namespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetExcludedNamespaces"></a>

```python
def reset_excluded_namespaces() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pod_security_standards_level` <a name="reset_pod_security_standards_level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetPodSecurityStandardsLevel"></a>

```python
def reset_pod_security_standards_level() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KubernetesClusterDeploymentSafeguard resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KubernetesClusterDeploymentSafeguard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KubernetesClusterDeploymentSafeguard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KubernetesClusterDeploymentSafeguard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesClusterDeploymentSafeguard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference">KubernetesClusterDeploymentSafeguardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespacesInput">excluded_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterIdInput">kubernetes_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevelInput">pod_security_standards_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespaces">excluded_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevel">pod_security_standards_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeouts"></a>

```python
timeouts: KubernetesClusterDeploymentSafeguardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference">KubernetesClusterDeploymentSafeguardTimeoutsOutputReference</a>

---

##### `excluded_namespaces_input`<sup>Optional</sup> <a name="excluded_namespaces_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespacesInput"></a>

```python
excluded_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_cluster_id_input`<sup>Optional</sup> <a name="kubernetes_cluster_id_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterIdInput"></a>

```python
kubernetes_cluster_id_input: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `pod_security_standards_level_input`<sup>Optional</sup> <a name="pod_security_standards_level_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevelInput"></a>

```python
pod_security_standards_level_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | KubernetesClusterDeploymentSafeguardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

---

##### `excluded_namespaces`<sup>Required</sup> <a name="excluded_namespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespaces"></a>

```python
excluded_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterId"></a>

```python
kubernetes_cluster_id: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `pod_security_standards_level`<sup>Required</sup> <a name="pod_security_standards_level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevel"></a>

```python
pod_security_standards_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterDeploymentSafeguardConfig <a name="KubernetesClusterDeploymentSafeguardConfig" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  kubernetes_cluster_id: str,
  level: str,
  excluded_namespaces: typing.List[str] = None,
  id: str = None,
  pod_security_standards_level: str = None,
  timeouts: KubernetesClusterDeploymentSafeguardTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.kubernetesClusterId">kubernetes_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.excludedNamespaces">excluded_namespaces</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.podSecurityStandardsLevel">pod_security_standards_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kubernetes_cluster_id`<sup>Required</sup> <a name="kubernetes_cluster_id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.kubernetesClusterId"></a>

```python
kubernetes_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}.

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}.

---

##### `excluded_namespaces`<sup>Optional</sup> <a name="excluded_namespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.excludedNamespaces"></a>

```python
excluded_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pod_security_standards_level`<sup>Optional</sup> <a name="pod_security_standards_level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.podSecurityStandardsLevel"></a>

```python
pod_security_standards_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.timeouts"></a>

```python
timeouts: KubernetesClusterDeploymentSafeguardTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#timeouts KubernetesClusterDeploymentSafeguard#timeouts}

---

### KubernetesClusterDeploymentSafeguardTimeouts <a name="KubernetesClusterDeploymentSafeguardTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterDeploymentSafeguardTimeoutsOutputReference <a name="KubernetesClusterDeploymentSafeguardTimeoutsOutputReference" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import kubernetes_cluster_deployment_safeguard

kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KubernetesClusterDeploymentSafeguardTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

---



