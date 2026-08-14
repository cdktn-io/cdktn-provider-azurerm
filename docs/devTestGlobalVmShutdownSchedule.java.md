# `devTestGlobalVmShutdownSchedule` Submodule <a name="`devTestGlobalVmShutdownSchedule` Submodule" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevTestGlobalVmShutdownSchedule <a name="DevTestGlobalVmShutdownSchedule" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule azurerm_dev_test_global_vm_shutdown_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownSchedule;

DevTestGlobalVmShutdownSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dailyRecurrenceTime(java.lang.String)
    .location(java.lang.String)
    .notificationSettings(DevTestGlobalVmShutdownScheduleNotificationSettings)
    .timezone(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestGlobalVmShutdownScheduleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.dailyRecurrenceTime">dailyRecurrenceTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#location DevTestGlobalVmShutdownSchedule#location}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#timezone DevTestGlobalVmShutdownSchedule#timezone}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#id DevTestGlobalVmShutdownSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#tags DevTestGlobalVmShutdownSchedule#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dailyRecurrenceTime`<sup>Required</sup> <a name="dailyRecurrenceTime" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.dailyRecurrenceTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#location DevTestGlobalVmShutdownSchedule#location}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.notificationSettings"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#notification_settings DevTestGlobalVmShutdownSchedule#notification_settings}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#timezone DevTestGlobalVmShutdownSchedule#timezone}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.virtualMachineId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#id DevTestGlobalVmShutdownSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#tags DevTestGlobalVmShutdownSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#timeouts DevTestGlobalVmShutdownSchedule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putNotificationSettings">putNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationSettings` <a name="putNotificationSettings" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putNotificationSettings"></a>

```java
public void putNotificationSettings(DevTestGlobalVmShutdownScheduleNotificationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putTimeouts"></a>

```java
public void putTimeouts(DevTestGlobalVmShutdownScheduleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevTestGlobalVmShutdownSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownSchedule;

DevTestGlobalVmShutdownSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownSchedule;

DevTestGlobalVmShutdownSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownSchedule;

DevTestGlobalVmShutdownSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownSchedule;

DevTestGlobalVmShutdownSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevTestGlobalVmShutdownSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevTestGlobalVmShutdownSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevTestGlobalVmShutdownSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevTestGlobalVmShutdownSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevTestGlobalVmShutdownSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference">DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference">DevTestGlobalVmShutdownScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTimeInput">dailyRecurrenceTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettingsInput">notificationSettingsInput</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineIdInput">virtualMachineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTime">dailyRecurrenceTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettings"></a>

```java
public DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference getNotificationSettings();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference">DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeouts"></a>

```java
public DevTestGlobalVmShutdownScheduleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference">DevTestGlobalVmShutdownScheduleTimeoutsOutputReference</a>

---

##### `dailyRecurrenceTimeInput`<sup>Optional</sup> <a name="dailyRecurrenceTimeInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTimeInput"></a>

```java
public java.lang.String getDailyRecurrenceTimeInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `notificationSettingsInput`<sup>Optional</sup> <a name="notificationSettingsInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.notificationSettingsInput"></a>

```java
public DevTestGlobalVmShutdownScheduleNotificationSettings getNotificationSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timeoutsInput"></a>

```java
public IResolvable|DevTestGlobalVmShutdownScheduleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `virtualMachineIdInput`<sup>Optional</sup> <a name="virtualMachineIdInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineIdInput"></a>

```java
public java.lang.String getVirtualMachineIdInput();
```

- *Type:* java.lang.String

---

##### `dailyRecurrenceTime`<sup>Required</sup> <a name="dailyRecurrenceTime" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.dailyRecurrenceTime"></a>

```java
public java.lang.String getDailyRecurrenceTime();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevTestGlobalVmShutdownScheduleConfig <a name="DevTestGlobalVmShutdownScheduleConfig" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownScheduleConfig;

DevTestGlobalVmShutdownScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dailyRecurrenceTime(java.lang.String)
    .location(java.lang.String)
    .notificationSettings(DevTestGlobalVmShutdownScheduleNotificationSettings)
    .timezone(java.lang.String)
    .virtualMachineId(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DevTestGlobalVmShutdownScheduleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dailyRecurrenceTime">dailyRecurrenceTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#location DevTestGlobalVmShutdownSchedule#location}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.notificationSettings">notificationSettings</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | notification_settings block. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#timezone DevTestGlobalVmShutdownSchedule#timezone}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#id DevTestGlobalVmShutdownSchedule#id}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#tags DevTestGlobalVmShutdownSchedule#tags}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dailyRecurrenceTime`<sup>Required</sup> <a name="dailyRecurrenceTime" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.dailyRecurrenceTime"></a>

```java
public java.lang.String getDailyRecurrenceTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#daily_recurrence_time DevTestGlobalVmShutdownSchedule#daily_recurrence_time}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#location DevTestGlobalVmShutdownSchedule#location}.

---

##### `notificationSettings`<sup>Required</sup> <a name="notificationSettings" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.notificationSettings"></a>

```java
public DevTestGlobalVmShutdownScheduleNotificationSettings getNotificationSettings();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#notification_settings DevTestGlobalVmShutdownSchedule#notification_settings}

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#timezone DevTestGlobalVmShutdownSchedule#timezone}.

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#virtual_machine_id DevTestGlobalVmShutdownSchedule#virtual_machine_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#id DevTestGlobalVmShutdownSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#tags DevTestGlobalVmShutdownSchedule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleConfig.property.timeouts"></a>

```java
public DevTestGlobalVmShutdownScheduleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#timeouts DevTestGlobalVmShutdownSchedule#timeouts}

---

### DevTestGlobalVmShutdownScheduleNotificationSettings <a name="DevTestGlobalVmShutdownScheduleNotificationSettings" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownScheduleNotificationSettings;

DevTestGlobalVmShutdownScheduleNotificationSettings.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .email(java.lang.String)
//  .timeInMinutes(java.lang.Number)
//  .webhookUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#email DevTestGlobalVmShutdownSchedule#email}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.timeInMinutes">timeInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#time_in_minutes DevTestGlobalVmShutdownSchedule#time_in_minutes}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#webhook_url DevTestGlobalVmShutdownSchedule#webhook_url}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#enabled DevTestGlobalVmShutdownSchedule#enabled}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#email DevTestGlobalVmShutdownSchedule#email}.

---

##### `timeInMinutes`<sup>Optional</sup> <a name="timeInMinutes" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.timeInMinutes"></a>

```java
public java.lang.Number getTimeInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#time_in_minutes DevTestGlobalVmShutdownSchedule#time_in_minutes}.

---

##### `webhookUrl`<sup>Optional</sup> <a name="webhookUrl" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#webhook_url DevTestGlobalVmShutdownSchedule#webhook_url}.

---

### DevTestGlobalVmShutdownScheduleTimeouts <a name="DevTestGlobalVmShutdownScheduleTimeouts" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownScheduleTimeouts;

DevTestGlobalVmShutdownScheduleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#create DevTestGlobalVmShutdownSchedule#create}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#delete DevTestGlobalVmShutdownSchedule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#read DevTestGlobalVmShutdownSchedule#read}. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#update DevTestGlobalVmShutdownSchedule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#create DevTestGlobalVmShutdownSchedule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#delete DevTestGlobalVmShutdownSchedule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#read DevTestGlobalVmShutdownSchedule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/dev_test_global_vm_shutdown_schedule#update DevTestGlobalVmShutdownSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference <a name="DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference;

new DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetTimeInMinutes">resetTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetWebhookUrl">resetWebhookUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetTimeInMinutes` <a name="resetTimeInMinutes" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetTimeInMinutes"></a>

```java
public void resetTimeInMinutes()
```

##### `resetWebhookUrl` <a name="resetWebhookUrl" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.resetWebhookUrl"></a>

```java
public void resetWebhookUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutesInput">timeInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrlInput">webhookUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutes">timeInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrl">webhookUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeInMinutesInput`<sup>Optional</sup> <a name="timeInMinutesInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutesInput"></a>

```java
public java.lang.Number getTimeInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `webhookUrlInput`<sup>Optional</sup> <a name="webhookUrlInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrlInput"></a>

```java
public java.lang.String getWebhookUrlInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeInMinutes`<sup>Required</sup> <a name="timeInMinutes" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.timeInMinutes"></a>

```java
public java.lang.Number getTimeInMinutes();
```

- *Type:* java.lang.Number

---

##### `webhookUrl`<sup>Required</sup> <a name="webhookUrl" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.webhookUrl"></a>

```java
public java.lang.String getWebhookUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettingsOutputReference.property.internalValue"></a>

```java
public DevTestGlobalVmShutdownScheduleNotificationSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleNotificationSettings">DevTestGlobalVmShutdownScheduleNotificationSettings</a>

---


### DevTestGlobalVmShutdownScheduleTimeoutsOutputReference <a name="DevTestGlobalVmShutdownScheduleTimeoutsOutputReference" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.dev_test_global_vm_shutdown_schedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference;

new DevTestGlobalVmShutdownScheduleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevTestGlobalVmShutdownScheduleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.devTestGlobalVmShutdownSchedule.DevTestGlobalVmShutdownScheduleTimeouts">DevTestGlobalVmShutdownScheduleTimeouts</a>

---



