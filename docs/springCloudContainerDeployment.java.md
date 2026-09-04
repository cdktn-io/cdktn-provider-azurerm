# `springCloudContainerDeployment` Submodule <a name="`springCloudContainerDeployment` Submodule" id="@cdktn/provider-azurerm.springCloudContainerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudContainerDeployment <a name="SpringCloudContainerDeployment" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment azurerm_spring_cloud_container_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeployment;

SpringCloudContainerDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .image(java.lang.String)
    .name(java.lang.String)
    .server(java.lang.String)
    .springCloudAppId(java.lang.String)
//  .addonJson(java.lang.String)
//  .applicationPerformanceMonitoringIds(java.util.List<java.lang.String>)
//  .arguments(java.util.List<java.lang.String>)
//  .commands(java.util.List<java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .languageFramework(java.lang.String)
//  .quota(SpringCloudContainerDeploymentQuota)
//  .timeouts(SpringCloudContainerDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.springCloudAppId">springCloudAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.addonJson">addonJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.languageFramework">languageFramework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.quota">quota</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.image"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.server"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}.

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.springCloudAppId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}.

---

##### `addonJson`<sup>Optional</sup> <a name="addonJson" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.addonJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}.

---

##### `applicationPerformanceMonitoringIds`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.applicationPerformanceMonitoringIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.arguments"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.commands"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.environmentVariables"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.instanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}.

---

##### `languageFramework`<sup>Optional</sup> <a name="languageFramework" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.languageFramework"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.quota"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#quota SpringCloudContainerDeployment#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#timeouts SpringCloudContainerDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetAddonJson">resetAddonJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetApplicationPerformanceMonitoringIds">resetApplicationPerformanceMonitoringIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetLanguageFramework">resetLanguageFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuota` <a name="putQuota" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota"></a>

```java
public void putQuota(SpringCloudContainerDeploymentQuota value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts"></a>

```java
public void putTimeouts(SpringCloudContainerDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

---

##### `resetAddonJson` <a name="resetAddonJson" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetAddonJson"></a>

```java
public void resetAddonJson()
```

##### `resetApplicationPerformanceMonitoringIds` <a name="resetApplicationPerformanceMonitoringIds" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetApplicationPerformanceMonitoringIds"></a>

```java
public void resetApplicationPerformanceMonitoringIds()
```

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetCommands` <a name="resetCommands" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetCommands"></a>

```java
public void resetCommands()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetLanguageFramework` <a name="resetLanguageFramework" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetLanguageFramework"></a>

```java
public void resetLanguageFramework()
```

##### `resetQuota` <a name="resetQuota" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SpringCloudContainerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeployment;

SpringCloudContainerDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeployment;

SpringCloudContainerDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeployment;

SpringCloudContainerDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeployment;

SpringCloudContainerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpringCloudContainerDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SpringCloudContainerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpringCloudContainerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpringCloudContainerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SpringCloudContainerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference">SpringCloudContainerDeploymentQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference">SpringCloudContainerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJsonInput">addonJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIdsInput">applicationPerformanceMonitoringIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.argumentsInput">argumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commandsInput">commandsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFrameworkInput">languageFrameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quotaInput">quotaInput</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppIdInput">springCloudAppIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJson">addonJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFramework">languageFramework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppId">springCloudAppId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `quota`<sup>Required</sup> <a name="quota" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quota"></a>

```java
public SpringCloudContainerDeploymentQuotaOutputReference getQuota();
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference">SpringCloudContainerDeploymentQuotaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeouts"></a>

```java
public SpringCloudContainerDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference">SpringCloudContainerDeploymentTimeoutsOutputReference</a>

---

##### `addonJsonInput`<sup>Optional</sup> <a name="addonJsonInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJsonInput"></a>

```java
public java.lang.String getAddonJsonInput();
```

- *Type:* java.lang.String

---

##### `applicationPerformanceMonitoringIdsInput`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIdsInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIdsInput"></a>

```java
public java.util.List<java.lang.String> getApplicationPerformanceMonitoringIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.argumentsInput"></a>

```java
public java.util.List<java.lang.String> getArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commandsInput"></a>

```java
public java.util.List<java.lang.String> getCommandsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `languageFrameworkInput`<sup>Optional</sup> <a name="languageFrameworkInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFrameworkInput"></a>

```java
public java.lang.String getLanguageFrameworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quotaInput"></a>

```java
public SpringCloudContainerDeploymentQuota getQuotaInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `springCloudAppIdInput`<sup>Optional</sup> <a name="springCloudAppIdInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppIdInput"></a>

```java
public java.lang.String getSpringCloudAppIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeoutsInput"></a>

```java
public IResolvable|SpringCloudContainerDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

---

##### `addonJson`<sup>Required</sup> <a name="addonJson" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJson"></a>

```java
public java.lang.String getAddonJson();
```

- *Type:* java.lang.String

---

##### `applicationPerformanceMonitoringIds`<sup>Required</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.applicationPerformanceMonitoringIds"></a>

```java
public java.util.List<java.lang.String> getApplicationPerformanceMonitoringIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `languageFramework`<sup>Required</sup> <a name="languageFramework" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFramework"></a>

```java
public java.lang.String getLanguageFramework();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppId"></a>

```java
public java.lang.String getSpringCloudAppId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudContainerDeploymentConfig <a name="SpringCloudContainerDeploymentConfig" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeploymentConfig;

SpringCloudContainerDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .image(java.lang.String)
    .name(java.lang.String)
    .server(java.lang.String)
    .springCloudAppId(java.lang.String)
//  .addonJson(java.lang.String)
//  .applicationPerformanceMonitoringIds(java.util.List<java.lang.String>)
//  .arguments(java.util.List<java.lang.String>)
//  .commands(java.util.List<java.lang.String>)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .instanceCount(java.lang.Number)
//  .languageFramework(java.lang.String)
//  .quota(SpringCloudContainerDeploymentQuota)
//  .timeouts(SpringCloudContainerDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.springCloudAppId">springCloudAppId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.addonJson">addonJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.applicationPerformanceMonitoringIds">applicationPerformanceMonitoringIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.commands">commands</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.languageFramework">languageFramework</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.quota">quota</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}.

---

##### `springCloudAppId`<sup>Required</sup> <a name="springCloudAppId" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.springCloudAppId"></a>

```java
public java.lang.String getSpringCloudAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}.

---

##### `addonJson`<sup>Optional</sup> <a name="addonJson" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.addonJson"></a>

```java
public java.lang.String getAddonJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}.

---

##### `applicationPerformanceMonitoringIds`<sup>Optional</sup> <a name="applicationPerformanceMonitoringIds" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.applicationPerformanceMonitoringIds"></a>

```java
public java.util.List<java.lang.String> getApplicationPerformanceMonitoringIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#application_performance_monitoring_ids SpringCloudContainerDeployment#application_performance_monitoring_ids}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}.

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.commands"></a>

```java
public java.util.List<java.lang.String> getCommands();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}.

---

##### `languageFramework`<sup>Optional</sup> <a name="languageFramework" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.languageFramework"></a>

```java
public java.lang.String getLanguageFramework();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.quota"></a>

```java
public SpringCloudContainerDeploymentQuota getQuota();
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#quota SpringCloudContainerDeployment#quota}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.timeouts"></a>

```java
public SpringCloudContainerDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#timeouts SpringCloudContainerDeployment#timeouts}

---

### SpringCloudContainerDeploymentQuota <a name="SpringCloudContainerDeploymentQuota" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.Initializer"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeploymentQuota;

SpringCloudContainerDeploymentQuota.builder()
//  .cpu(java.lang.String)
//  .memory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}.

---

### SpringCloudContainerDeploymentTimeouts <a name="SpringCloudContainerDeploymentTimeouts" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeploymentTimeouts;

SpringCloudContainerDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudContainerDeploymentQuotaOutputReference <a name="SpringCloudContainerDeploymentQuotaOutputReference" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeploymentQuotaOutputReference;

new SpringCloudContainerDeploymentQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetMemory">resetMemory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpu` <a name="resetCpu" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetMemory` <a name="resetMemory" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetMemory"></a>

```java
public void resetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.internalValue"></a>

```java
public SpringCloudContainerDeploymentQuota getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---


### SpringCloudContainerDeploymentTimeoutsOutputReference <a name="SpringCloudContainerDeploymentTimeoutsOutputReference" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.spring_cloud_container_deployment.SpringCloudContainerDeploymentTimeoutsOutputReference;

new SpringCloudContainerDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SpringCloudContainerDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

---



