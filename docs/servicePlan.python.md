# `servicePlan` Submodule <a name="`servicePlan` Submodule" id="@cdktn/provider-azurerm.servicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePlan <a name="ServicePlan" id="@cdktn/provider-azurerm.servicePlan.ServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan azurerm_service_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlan(
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
  os_type: str,
  resource_group_name: str,
  sku_name: str,
  app_service_environment_id: str = None,
  id: str = None,
  maximum_elastic_worker_count: typing.Union[int, float] = None,
  per_site_scaling_enabled: bool | IResolvable = None,
  premium_plan_auto_scale_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: ServicePlanTimeouts = None,
  worker_count: typing.Union[int, float] = None,
  zone_balancing_enabled: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.appServiceEnvironmentId">app_service_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.maximumElasticWorkerCount">maximum_elastic_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.perSiteScalingEnabled">per_site_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.premiumPlanAutoScaleEnabled">premium_plan_auto_scale_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.zoneBalancingEnabled">zone_balancing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}.

---

##### `app_service_environment_id`<sup>Optional</sup> <a name="app_service_environment_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.appServiceEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_elastic_worker_count`<sup>Optional</sup> <a name="maximum_elastic_worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.maximumElasticWorkerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}.

---

##### `per_site_scaling_enabled`<sup>Optional</sup> <a name="per_site_scaling_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.perSiteScalingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}.

---

##### `premium_plan_auto_scale_enabled`<sup>Optional</sup> <a name="premium_plan_auto_scale_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.premiumPlanAutoScaleEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#timeouts ServicePlan#timeouts}

---

##### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.workerCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}.

---

##### `zone_balancing_enabled`<sup>Optional</sup> <a name="zone_balancing_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.zoneBalancingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetAppServiceEnvironmentId">reset_app_service_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetMaximumElasticWorkerCount">reset_maximum_elastic_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPerSiteScalingEnabled">reset_per_site_scaling_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPremiumPlanAutoScaleEnabled">reset_premium_plan_auto_scale_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetWorkerCount">reset_worker_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetZoneBalancingEnabled">reset_zone_balancing_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#create ServicePlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#delete ServicePlan#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#read ServicePlan#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#update ServicePlan#update}.

---

##### `reset_app_service_environment_id` <a name="reset_app_service_environment_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetAppServiceEnvironmentId"></a>

```python
def reset_app_service_environment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maximum_elastic_worker_count` <a name="reset_maximum_elastic_worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetMaximumElasticWorkerCount"></a>

```python
def reset_maximum_elastic_worker_count() -> None
```

##### `reset_per_site_scaling_enabled` <a name="reset_per_site_scaling_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPerSiteScalingEnabled"></a>

```python
def reset_per_site_scaling_enabled() -> None
```

##### `reset_premium_plan_auto_scale_enabled` <a name="reset_premium_plan_auto_scale_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPremiumPlanAutoScaleEnabled"></a>

```python
def reset_premium_plan_auto_scale_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_count` <a name="reset_worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetWorkerCount"></a>

```python
def reset_worker_count() -> None
```

##### `reset_zone_balancing_enabled` <a name="reset_zone_balancing_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetZoneBalancingEnabled"></a>

```python
def reset_zone_balancing_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicePlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isConstruct"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.reserved">reserved</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference">ServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentIdInput">app_service_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCountInput">maximum_elastic_worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabledInput">per_site_scaling_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabledInput">premium_plan_auto_scale_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCountInput">worker_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabledInput">zone_balancing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentId">app_service_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCount">maximum_elastic_worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabled">per_site_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabled">premium_plan_auto_scale_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabled">zone_balancing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.reserved"></a>

```python
reserved: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeouts"></a>

```python
timeouts: ServicePlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference">ServicePlanTimeoutsOutputReference</a>

---

##### `app_service_environment_id_input`<sup>Optional</sup> <a name="app_service_environment_id_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentIdInput"></a>

```python
app_service_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maximum_elastic_worker_count_input`<sup>Optional</sup> <a name="maximum_elastic_worker_count_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCountInput"></a>

```python
maximum_elastic_worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `per_site_scaling_enabled_input`<sup>Optional</sup> <a name="per_site_scaling_enabled_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabledInput"></a>

```python
per_site_scaling_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `premium_plan_auto_scale_enabled_input`<sup>Optional</sup> <a name="premium_plan_auto_scale_enabled_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabledInput"></a>

```python
premium_plan_auto_scale_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ServicePlanTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

---

##### `worker_count_input`<sup>Optional</sup> <a name="worker_count_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCountInput"></a>

```python
worker_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_balancing_enabled_input`<sup>Optional</sup> <a name="zone_balancing_enabled_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabledInput"></a>

```python
zone_balancing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `app_service_environment_id`<sup>Required</sup> <a name="app_service_environment_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentId"></a>

```python
app_service_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maximum_elastic_worker_count`<sup>Required</sup> <a name="maximum_elastic_worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCount"></a>

```python
maximum_elastic_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `per_site_scaling_enabled`<sup>Required</sup> <a name="per_site_scaling_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabled"></a>

```python
per_site_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `premium_plan_auto_scale_enabled`<sup>Required</sup> <a name="premium_plan_auto_scale_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabled"></a>

```python
premium_plan_auto_scale_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `worker_count`<sup>Required</sup> <a name="worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_balancing_enabled`<sup>Required</sup> <a name="zone_balancing_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabled"></a>

```python
zone_balancing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePlanConfig <a name="ServicePlanConfig" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  os_type: str,
  resource_group_name: str,
  sku_name: str,
  app_service_environment_id: str = None,
  id: str = None,
  maximum_elastic_worker_count: typing.Union[int, float] = None,
  per_site_scaling_enabled: bool | IResolvable = None,
  premium_plan_auto_scale_enabled: bool | IResolvable = None,
  tags: typing.Mapping[str] = None,
  timeouts: ServicePlanTimeouts = None,
  worker_count: typing.Union[int, float] = None,
  zone_balancing_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.appServiceEnvironmentId">app_service_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.maximumElasticWorkerCount">maximum_elastic_worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.perSiteScalingEnabled">per_site_scaling_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.premiumPlanAutoScaleEnabled">premium_plan_auto_scale_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.workerCount">worker_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.zoneBalancingEnabled">zone_balancing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}.

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}.

---

##### `app_service_environment_id`<sup>Optional</sup> <a name="app_service_environment_id" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.appServiceEnvironmentId"></a>

```python
app_service_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximum_elastic_worker_count`<sup>Optional</sup> <a name="maximum_elastic_worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.maximumElasticWorkerCount"></a>

```python
maximum_elastic_worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}.

---

##### `per_site_scaling_enabled`<sup>Optional</sup> <a name="per_site_scaling_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.perSiteScalingEnabled"></a>

```python
per_site_scaling_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}.

---

##### `premium_plan_auto_scale_enabled`<sup>Optional</sup> <a name="premium_plan_auto_scale_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.premiumPlanAutoScaleEnabled"></a>

```python
premium_plan_auto_scale_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.timeouts"></a>

```python
timeouts: ServicePlanTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#timeouts ServicePlan#timeouts}

---

##### `worker_count`<sup>Optional</sup> <a name="worker_count" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.workerCount"></a>

```python
worker_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}.

---

##### `zone_balancing_enabled`<sup>Optional</sup> <a name="zone_balancing_enabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.zoneBalancingEnabled"></a>

```python
zone_balancing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}.

---

### ServicePlanTimeouts <a name="ServicePlanTimeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlanTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#create ServicePlan#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#delete ServicePlan#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#read ServicePlan#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#update ServicePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#create ServicePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#delete ServicePlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#read ServicePlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#update ServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePlanTimeoutsOutputReference <a name="ServicePlanTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import service_plan

servicePlan.ServicePlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicePlanTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

---



