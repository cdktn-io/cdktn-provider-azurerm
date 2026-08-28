# `dataFactoryTriggerSchedule` Submodule <a name="`dataFactoryTriggerSchedule` Submodule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryTriggerSchedule <a name="DataFactoryTriggerSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule azurerm_data_factory_trigger_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedule;

DataFactoryTriggerSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .activated(java.lang.Boolean|IResolvable)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .endTime(java.lang.String)
//  .frequency(java.lang.String)
//  .id(java.lang.String)
//  .interval(java.lang.Number)
//  .pipeline(IResolvable|java.util.List<DataFactoryTriggerSchedulePipeline>)
//  .pipelineName(java.lang.String)
//  .pipelineParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schedule(DataFactoryTriggerScheduleSchedule)
//  .startTime(java.lang.String)
//  .timeouts(DataFactoryTriggerScheduleTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.activated">activated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipeline">pipeline</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>></code> | pipeline block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineParameters">pipelineParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | schedule block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.dataFactoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.activated"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.annotations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.frequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.interval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipeline"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline DataFactoryTriggerSchedule#pipeline}

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}.

---

##### `pipelineParameters`<sup>Optional</sup> <a name="pipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.pipelineParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#schedule DataFactoryTriggerSchedule#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#timeouts DataFactoryTriggerSchedule#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline">putPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated">resetActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName">resetPipelineName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters">resetPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPipeline` <a name="putPipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline"></a>

```java
public void putPipeline(IResolvable|java.util.List<DataFactoryTriggerSchedulePipeline> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putPipeline.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule"></a>

```java
public void putSchedule(DataFactoryTriggerScheduleSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts"></a>

```java
public void putTimeouts(DataFactoryTriggerScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---

##### `resetActivated` <a name="resetActivated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetActivated"></a>

```java
public void resetActivated()
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipeline"></a>

```java
public void resetPipeline()
```

##### `resetPipelineName` <a name="resetPipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineName"></a>

```java
public void resetPipelineName()
```

##### `resetPipelineParameters` <a name="resetPipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetPipelineParameters"></a>

```java
public void resetPipelineParameters()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.resetTimeZone"></a>

```java
public void resetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryTriggerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedule;

DataFactoryTriggerSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedule;

DataFactoryTriggerSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedule;

DataFactoryTriggerSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedule;

DataFactoryTriggerSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataFactoryTriggerSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataFactoryTriggerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataFactoryTriggerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataFactoryTriggerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryTriggerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline">pipeline</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput">activatedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput">annotationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput">pipelineInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput">pipelineNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput">pipelineParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated">activated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters">pipelineParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipeline"></a>

```java
public DataFactoryTriggerSchedulePipelineList getPipeline();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList">DataFactoryTriggerSchedulePipelineList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.schedule"></a>

```java
public DataFactoryTriggerScheduleScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference">DataFactoryTriggerScheduleScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeouts"></a>

```java
public DataFactoryTriggerScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference">DataFactoryTriggerScheduleTimeoutsOutputReference</a>

---

##### `activatedInput`<sup>Optional</sup> <a name="activatedInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activatedInput"></a>

```java
public java.lang.Boolean|IResolvable getActivatedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotationsInput"></a>

```java
public java.util.List<java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryIdInput"></a>

```java
public java.lang.String getDataFactoryIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineInput"></a>

```java
public IResolvable|java.util.List<DataFactoryTriggerSchedulePipeline> getPipelineInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>>

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineNameInput"></a>

```java
public java.lang.String getPipelineNameInput();
```

- *Type:* java.lang.String

---

##### `pipelineParametersInput`<sup>Optional</sup> <a name="pipelineParametersInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPipelineParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.scheduleInput"></a>

```java
public DataFactoryTriggerScheduleSchedule getScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeoutsInput"></a>

```java
public IResolvable|DataFactoryTriggerScheduleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `activated`<sup>Required</sup> <a name="activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.activated"></a>

```java
public java.lang.Boolean|IResolvable getActivated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

---

##### `pipelineParameters`<sup>Required</sup> <a name="pipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.pipelineParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPipelineParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryTriggerScheduleConfig <a name="DataFactoryTriggerScheduleConfig" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleConfig;

DataFactoryTriggerScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataFactoryId(java.lang.String)
    .name(java.lang.String)
//  .activated(java.lang.Boolean|IResolvable)
//  .annotations(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .endTime(java.lang.String)
//  .frequency(java.lang.String)
//  .id(java.lang.String)
//  .interval(java.lang.Number)
//  .pipeline(IResolvable|java.util.List<DataFactoryTriggerSchedulePipeline>)
//  .pipelineName(java.lang.String)
//  .pipelineParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .schedule(DataFactoryTriggerScheduleSchedule)
//  .startTime(java.lang.String)
//  .timeouts(DataFactoryTriggerScheduleTimeouts)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated">activated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations">annotations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline">pipeline</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>></code> | pipeline block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName">pipelineName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters">pipelineParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | schedule block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.dataFactoryId"></a>

```java
public java.lang.String getDataFactoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#data_factory_id DataFactoryTriggerSchedule#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `activated`<sup>Optional</sup> <a name="activated" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.activated"></a>

```java
public java.lang.Boolean|IResolvable getActivated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#activated DataFactoryTriggerSchedule#activated}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.annotations"></a>

```java
public java.util.List<java.lang.String> getAnnotations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#annotations DataFactoryTriggerSchedule#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#description DataFactoryTriggerSchedule#description}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#end_time DataFactoryTriggerSchedule#end_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#frequency DataFactoryTriggerSchedule#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#id DataFactoryTriggerSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#interval DataFactoryTriggerSchedule#interval}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipeline"></a>

```java
public IResolvable|java.util.List<DataFactoryTriggerSchedulePipeline> getPipeline();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>>

pipeline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline DataFactoryTriggerSchedule#pipeline}

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineName"></a>

```java
public java.lang.String getPipelineName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_name DataFactoryTriggerSchedule#pipeline_name}.

---

##### `pipelineParameters`<sup>Optional</sup> <a name="pipelineParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.pipelineParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPipelineParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#pipeline_parameters DataFactoryTriggerSchedule#pipeline_parameters}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.schedule"></a>

```java
public DataFactoryTriggerScheduleSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#schedule DataFactoryTriggerSchedule#schedule}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#start_time DataFactoryTriggerSchedule#start_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeouts"></a>

```java
public DataFactoryTriggerScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#timeouts DataFactoryTriggerSchedule#timeouts}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#time_zone DataFactoryTriggerSchedule#time_zone}.

---

### DataFactoryTriggerSchedulePipeline <a name="DataFactoryTriggerSchedulePipeline" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedulePipeline;

DataFactoryTriggerSchedulePipeline.builder()
    .name(java.lang.String)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#name DataFactoryTriggerSchedule#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#parameters DataFactoryTriggerSchedule#parameters}.

---

### DataFactoryTriggerScheduleSchedule <a name="DataFactoryTriggerScheduleSchedule" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleSchedule;

DataFactoryTriggerScheduleSchedule.builder()
//  .daysOfMonth(java.util.List<java.lang.Number>)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .hours(java.util.List<java.lang.Number>)
//  .minutes(java.util.List<java.lang.Number>)
//  .monthly(IResolvable|java.util.List<DataFactoryTriggerScheduleScheduleMonthly>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours">hours</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes">minutes</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly">monthly</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>></code> | monthly block. |

---

##### `daysOfMonth`<sup>Optional</sup> <a name="daysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#days_of_month DataFactoryTriggerSchedule#days_of_month}.

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#days_of_week DataFactoryTriggerSchedule#days_of_week}.

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.hours"></a>

```java
public java.util.List<java.lang.Number> getHours();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#hours DataFactoryTriggerSchedule#hours}.

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.minutes"></a>

```java
public java.util.List<java.lang.Number> getMinutes();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#minutes DataFactoryTriggerSchedule#minutes}.

---

##### `monthly`<sup>Optional</sup> <a name="monthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule.property.monthly"></a>

```java
public IResolvable|java.util.List<DataFactoryTriggerScheduleScheduleMonthly> getMonthly();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>>

monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#monthly DataFactoryTriggerSchedule#monthly}

---

### DataFactoryTriggerScheduleScheduleMonthly <a name="DataFactoryTriggerScheduleScheduleMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleScheduleMonthly;

DataFactoryTriggerScheduleScheduleMonthly.builder()
    .weekday(java.lang.String)
//  .week(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday">weekday</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week">week</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}. |

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.weekday"></a>

```java
public java.lang.String getWeekday();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#weekday DataFactoryTriggerSchedule#weekday}.

---

##### `week`<sup>Optional</sup> <a name="week" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly.property.week"></a>

```java
public java.lang.Number getWeek();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#week DataFactoryTriggerSchedule#week}.

---

### DataFactoryTriggerScheduleTimeouts <a name="DataFactoryTriggerScheduleTimeouts" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleTimeouts;

DataFactoryTriggerScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#create DataFactoryTriggerSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#delete DataFactoryTriggerSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#read DataFactoryTriggerSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/data_factory_trigger_schedule#update DataFactoryTriggerSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryTriggerSchedulePipelineList <a name="DataFactoryTriggerSchedulePipelineList" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedulePipelineList;

new DataFactoryTriggerSchedulePipelineList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get"></a>

```java
public DataFactoryTriggerSchedulePipelineOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataFactoryTriggerSchedulePipeline> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>>

---


### DataFactoryTriggerSchedulePipelineOutputReference <a name="DataFactoryTriggerSchedulePipelineOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerSchedulePipelineOutputReference;

new DataFactoryTriggerSchedulePipelineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipelineOutputReference.property.internalValue"></a>

```java
public IResolvable|DataFactoryTriggerSchedulePipeline getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerSchedulePipeline">DataFactoryTriggerSchedulePipeline</a>

---


### DataFactoryTriggerScheduleScheduleMonthlyList <a name="DataFactoryTriggerScheduleScheduleMonthlyList" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleScheduleMonthlyList;

new DataFactoryTriggerScheduleScheduleMonthlyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get"></a>

```java
public DataFactoryTriggerScheduleScheduleMonthlyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataFactoryTriggerScheduleScheduleMonthly> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>>

---


### DataFactoryTriggerScheduleScheduleMonthlyOutputReference <a name="DataFactoryTriggerScheduleScheduleMonthlyOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference;

new DataFactoryTriggerScheduleScheduleMonthlyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek">resetWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeek` <a name="resetWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.resetWeek"></a>

```java
public void resetWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput">weekdayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput">weekInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week">week</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday">weekday</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weekdayInput`<sup>Optional</sup> <a name="weekdayInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekdayInput"></a>

```java
public java.lang.String getWeekdayInput();
```

- *Type:* java.lang.String

---

##### `weekInput`<sup>Optional</sup> <a name="weekInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekInput"></a>

```java
public java.lang.Number getWeekInput();
```

- *Type:* java.lang.Number

---

##### `week`<sup>Required</sup> <a name="week" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.week"></a>

```java
public java.lang.Number getWeek();
```

- *Type:* java.lang.Number

---

##### `weekday`<sup>Required</sup> <a name="weekday" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.weekday"></a>

```java
public java.lang.String getWeekday();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyOutputReference.property.internalValue"></a>

```java
public IResolvable|DataFactoryTriggerScheduleScheduleMonthly getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>

---


### DataFactoryTriggerScheduleScheduleOutputReference <a name="DataFactoryTriggerScheduleScheduleOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleScheduleOutputReference;

new DataFactoryTriggerScheduleScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly">putMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth">resetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly">resetMonthly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthly` <a name="putMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly"></a>

```java
public void putMonthly(IResolvable|java.util.List<DataFactoryTriggerScheduleScheduleMonthly> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>>

---

##### `resetDaysOfMonth` <a name="resetDaysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfMonth"></a>

```java
public void resetDaysOfMonth()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHours` <a name="resetHours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetMonthly` <a name="resetMonthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.resetMonthly"></a>

```java
public void resetMonthly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput">daysOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput">monthlyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours">hours</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes">minutes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthly"></a>

```java
public DataFactoryTriggerScheduleScheduleMonthlyList getMonthly();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthlyList">DataFactoryTriggerScheduleScheduleMonthlyList</a>

---

##### `daysOfMonthInput`<sup>Optional</sup> <a name="daysOfMonthInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hoursInput"></a>

```java
public java.util.List<java.lang.Number> getHoursInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutesInput"></a>

```java
public java.util.List<java.lang.Number> getMinutesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `monthlyInput`<sup>Optional</sup> <a name="monthlyInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.monthlyInput"></a>

```java
public IResolvable|java.util.List<DataFactoryTriggerScheduleScheduleMonthly> getMonthlyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleMonthly">DataFactoryTriggerScheduleScheduleMonthly</a>>

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfMonth"></a>

```java
public java.util.List<java.lang.Number> getDaysOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.hours"></a>

```java
public java.util.List<java.lang.Number> getHours();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.minutes"></a>

```java
public java.util.List<java.lang.Number> getMinutes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleScheduleOutputReference.property.internalValue"></a>

```java
public DataFactoryTriggerScheduleSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleSchedule">DataFactoryTriggerScheduleSchedule</a>

---


### DataFactoryTriggerScheduleTimeoutsOutputReference <a name="DataFactoryTriggerScheduleTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_factory_trigger_schedule.DataFactoryTriggerScheduleTimeoutsOutputReference;

new DataFactoryTriggerScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataFactoryTriggerScheduleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataFactoryTriggerSchedule.DataFactoryTriggerScheduleTimeouts">DataFactoryTriggerScheduleTimeouts</a>

---



