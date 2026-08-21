# `applicationInsights` Submodule <a name="`applicationInsights` Submodule" id="@cdktn/provider-azurerm.applicationInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationInsights <a name="ApplicationInsights" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights azurerm_application_insights}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsights(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_type: str,
  location: str,
  name: str,
  resource_group_name: str,
  daily_data_cap_in_gb: typing.Union[int, float] = None,
  daily_data_cap_notifications_enabled: bool | IResolvable = None,
  force_customer_storage_for_profiler: bool | IResolvable = None,
  id: str = None,
  internet_ingestion_enabled: bool | IResolvable = None,
  internet_query_enabled: bool | IResolvable = None,
  ip_masking_enabled: bool | IResolvable = None,
  local_authentication_enabled: bool | IResolvable = None,
  retention_in_days: typing.Union[int, float] = None,
  sampling_percentage: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationInsightsTimeouts = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#location ApplicationInsights#location}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#name ApplicationInsights#name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapInGb">daily_data_cap_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapNotificationsEnabled">daily_data_cap_notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_notifications_enabled ApplicationInsights#daily_data_cap_notifications_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forceCustomerStorageForProfiler">force_customer_storage_for_profiler</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#id ApplicationInsights#id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetIngestionEnabled">internet_ingestion_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetQueryEnabled">internet_query_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.ipMaskingEnabled">ip_masking_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#ip_masking_enabled ApplicationInsights#ip_masking_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#local_authentication_enabled ApplicationInsights#local_authentication_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#tags ApplicationInsights#tags}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.applicationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#location ApplicationInsights#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#name ApplicationInsights#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}.

---

##### `daily_data_cap_in_gb`<sup>Optional</sup> <a name="daily_data_cap_in_gb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}.

---

##### `daily_data_cap_notifications_enabled`<sup>Optional</sup> <a name="daily_data_cap_notifications_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.dailyDataCapNotificationsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_notifications_enabled ApplicationInsights#daily_data_cap_notifications_enabled}.

---

##### `force_customer_storage_for_profiler`<sup>Optional</sup> <a name="force_customer_storage_for_profiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.forceCustomerStorageForProfiler"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#id ApplicationInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_ingestion_enabled`<sup>Optional</sup> <a name="internet_ingestion_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetIngestionEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}.

---

##### `internet_query_enabled`<sup>Optional</sup> <a name="internet_query_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.internetQueryEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}.

---

##### `ip_masking_enabled`<sup>Optional</sup> <a name="ip_masking_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.ipMaskingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#ip_masking_enabled ApplicationInsights#ip_masking_enabled}.

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.localAuthenticationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#local_authentication_enabled ApplicationInsights#local_authentication_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}.

---

##### `sampling_percentage`<sup>Optional</sup> <a name="sampling_percentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.samplingPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#tags ApplicationInsights#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#timeouts ApplicationInsights#timeouts}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapInGb">reset_daily_data_cap_in_gb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapNotificationsEnabled">reset_daily_data_cap_notifications_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetForceCustomerStorageForProfiler">reset_force_customer_storage_for_profiler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetIngestionEnabled">reset_internet_ingestion_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetQueryEnabled">reset_internet_query_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetIpMaskingEnabled">reset_ip_masking_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetLocalAuthenticationEnabled">reset_local_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetSamplingPercentage">reset_sampling_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#create ApplicationInsights#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#delete ApplicationInsights#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#read ApplicationInsights#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#update ApplicationInsights#update}.

---

##### `reset_daily_data_cap_in_gb` <a name="reset_daily_data_cap_in_gb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapInGb"></a>

```python
def reset_daily_data_cap_in_gb() -> None
```

##### `reset_daily_data_cap_notifications_enabled` <a name="reset_daily_data_cap_notifications_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetDailyDataCapNotificationsEnabled"></a>

```python
def reset_daily_data_cap_notifications_enabled() -> None
```

##### `reset_force_customer_storage_for_profiler` <a name="reset_force_customer_storage_for_profiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetForceCustomerStorageForProfiler"></a>

```python
def reset_force_customer_storage_for_profiler() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_ingestion_enabled` <a name="reset_internet_ingestion_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetIngestionEnabled"></a>

```python
def reset_internet_ingestion_enabled() -> None
```

##### `reset_internet_query_enabled` <a name="reset_internet_query_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetInternetQueryEnabled"></a>

```python
def reset_internet_query_enabled() -> None
```

##### `reset_ip_masking_enabled` <a name="reset_ip_masking_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetIpMaskingEnabled"></a>

```python
def reset_ip_masking_enabled() -> None
```

##### `reset_local_authentication_enabled` <a name="reset_local_authentication_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetLocalAuthenticationEnabled"></a>

```python
def reset_local_authentication_enabled() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_sampling_percentage` <a name="reset_sampling_percentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetSamplingPercentage"></a>

```python
def reset_sampling_percentage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApplicationInsights resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsights.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsights.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsights.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsights.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApplicationInsights resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationInsights to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.instrumentationKey">instrumentation_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference">ApplicationInsightsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationTypeInput">application_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGbInput">daily_data_cap_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabledInput">daily_data_cap_notifications_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfilerInput">force_customer_storage_for_profiler_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabledInput">internet_ingestion_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabledInput">internet_query_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabledInput">ip_masking_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabledInput">local_authentication_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentageInput">sampling_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGb">daily_data_cap_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabled">daily_data_cap_notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfiler">force_customer_storage_for_profiler</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabled">internet_ingestion_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabled">internet_query_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabled">ip_masking_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `instrumentation_key`<sup>Required</sup> <a name="instrumentation_key" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.instrumentationKey"></a>

```python
instrumentation_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeouts"></a>

```python
timeouts: ApplicationInsightsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference">ApplicationInsightsTimeoutsOutputReference</a>

---

##### `application_type_input`<sup>Optional</sup> <a name="application_type_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationTypeInput"></a>

```python
application_type_input: str
```

- *Type:* str

---

##### `daily_data_cap_in_gb_input`<sup>Optional</sup> <a name="daily_data_cap_in_gb_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGbInput"></a>

```python
daily_data_cap_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_data_cap_notifications_enabled_input`<sup>Optional</sup> <a name="daily_data_cap_notifications_enabled_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabledInput"></a>

```python
daily_data_cap_notifications_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_customer_storage_for_profiler_input`<sup>Optional</sup> <a name="force_customer_storage_for_profiler_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfilerInput"></a>

```python
force_customer_storage_for_profiler_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_ingestion_enabled_input`<sup>Optional</sup> <a name="internet_ingestion_enabled_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabledInput"></a>

```python
internet_ingestion_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internet_query_enabled_input`<sup>Optional</sup> <a name="internet_query_enabled_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabledInput"></a>

```python
internet_query_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ip_masking_enabled_input`<sup>Optional</sup> <a name="ip_masking_enabled_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabledInput"></a>

```python
ip_masking_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `local_authentication_enabled_input`<sup>Optional</sup> <a name="local_authentication_enabled_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabledInput"></a>

```python
local_authentication_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sampling_percentage_input`<sup>Optional</sup> <a name="sampling_percentage_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentageInput"></a>

```python
sampling_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApplicationInsightsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `daily_data_cap_in_gb`<sup>Required</sup> <a name="daily_data_cap_in_gb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapInGb"></a>

```python
daily_data_cap_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `daily_data_cap_notifications_enabled`<sup>Required</sup> <a name="daily_data_cap_notifications_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.dailyDataCapNotificationsEnabled"></a>

```python
daily_data_cap_notifications_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_customer_storage_for_profiler`<sup>Required</sup> <a name="force_customer_storage_for_profiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.forceCustomerStorageForProfiler"></a>

```python
force_customer_storage_for_profiler: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_ingestion_enabled`<sup>Required</sup> <a name="internet_ingestion_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetIngestionEnabled"></a>

```python
internet_ingestion_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internet_query_enabled`<sup>Required</sup> <a name="internet_query_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.internetQueryEnabled"></a>

```python
internet_query_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ip_masking_enabled`<sup>Required</sup> <a name="ip_masking_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.ipMaskingEnabled"></a>

```python
ip_masking_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `local_authentication_enabled`<sup>Required</sup> <a name="local_authentication_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sampling_percentage`<sup>Required</sup> <a name="sampling_percentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsights.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationInsightsConfig <a name="ApplicationInsightsConfig" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.Initializer"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsightsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_type: str,
  location: str,
  name: str,
  resource_group_name: str,
  daily_data_cap_in_gb: typing.Union[int, float] = None,
  daily_data_cap_notifications_enabled: bool | IResolvable = None,
  force_customer_storage_for_profiler: bool | IResolvable = None,
  id: str = None,
  internet_ingestion_enabled: bool | IResolvable = None,
  internet_query_enabled: bool | IResolvable = None,
  ip_masking_enabled: bool | IResolvable = None,
  local_authentication_enabled: bool | IResolvable = None,
  retention_in_days: typing.Union[int, float] = None,
  sampling_percentage: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ApplicationInsightsTimeouts = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#location ApplicationInsights#location}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#name ApplicationInsights#name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapInGb">daily_data_cap_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapNotificationsEnabled">daily_data_cap_notifications_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_notifications_enabled ApplicationInsights#daily_data_cap_notifications_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forceCustomerStorageForProfiler">force_customer_storage_for_profiler</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#id ApplicationInsights#id}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetIngestionEnabled">internet_ingestion_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetQueryEnabled">internet_query_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.ipMaskingEnabled">ip_masking_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#ip_masking_enabled ApplicationInsights#ip_masking_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.localAuthenticationEnabled">local_authentication_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#local_authentication_enabled ApplicationInsights#local_authentication_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.samplingPercentage">sampling_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#tags ApplicationInsights#tags}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#application_type ApplicationInsights#application_type}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#location ApplicationInsights#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#name ApplicationInsights#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#resource_group_name ApplicationInsights#resource_group_name}.

---

##### `daily_data_cap_in_gb`<sup>Optional</sup> <a name="daily_data_cap_in_gb" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapInGb"></a>

```python
daily_data_cap_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_in_gb ApplicationInsights#daily_data_cap_in_gb}.

---

##### `daily_data_cap_notifications_enabled`<sup>Optional</sup> <a name="daily_data_cap_notifications_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.dailyDataCapNotificationsEnabled"></a>

```python
daily_data_cap_notifications_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#daily_data_cap_notifications_enabled ApplicationInsights#daily_data_cap_notifications_enabled}.

---

##### `force_customer_storage_for_profiler`<sup>Optional</sup> <a name="force_customer_storage_for_profiler" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.forceCustomerStorageForProfiler"></a>

```python
force_customer_storage_for_profiler: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#force_customer_storage_for_profiler ApplicationInsights#force_customer_storage_for_profiler}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#id ApplicationInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_ingestion_enabled`<sup>Optional</sup> <a name="internet_ingestion_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetIngestionEnabled"></a>

```python
internet_ingestion_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_ingestion_enabled ApplicationInsights#internet_ingestion_enabled}.

---

##### `internet_query_enabled`<sup>Optional</sup> <a name="internet_query_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.internetQueryEnabled"></a>

```python
internet_query_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#internet_query_enabled ApplicationInsights#internet_query_enabled}.

---

##### `ip_masking_enabled`<sup>Optional</sup> <a name="ip_masking_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.ipMaskingEnabled"></a>

```python
ip_masking_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#ip_masking_enabled ApplicationInsights#ip_masking_enabled}.

---

##### `local_authentication_enabled`<sup>Optional</sup> <a name="local_authentication_enabled" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.localAuthenticationEnabled"></a>

```python
local_authentication_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#local_authentication_enabled ApplicationInsights#local_authentication_enabled}.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#retention_in_days ApplicationInsights#retention_in_days}.

---

##### `sampling_percentage`<sup>Optional</sup> <a name="sampling_percentage" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.samplingPercentage"></a>

```python
sampling_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#sampling_percentage ApplicationInsights#sampling_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#tags ApplicationInsights#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.timeouts"></a>

```python
timeouts: ApplicationInsightsTimeouts
```

- *Type:* <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#timeouts ApplicationInsights#timeouts}

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#workspace_id ApplicationInsights#workspace_id}.

---

### ApplicationInsightsTimeouts <a name="ApplicationInsightsTimeouts" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.Initializer"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsightsTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#create ApplicationInsights#create}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#delete ApplicationInsights#delete}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#read ApplicationInsights#read}. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#update ApplicationInsights#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#create ApplicationInsights#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#delete ApplicationInsights#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#read ApplicationInsights#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/application_insights#update ApplicationInsights#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationInsightsTimeoutsOutputReference <a name="ApplicationInsightsTimeoutsOutputReference" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_azurerm import application_insights

applicationInsights.ApplicationInsightsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationInsightsTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.applicationInsights.ApplicationInsightsTimeouts">ApplicationInsightsTimeouts</a>

---



