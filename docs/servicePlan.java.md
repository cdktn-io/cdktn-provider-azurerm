# `servicePlan` Submodule <a name="`servicePlan` Submodule" id="@cdktn/provider-azurerm.servicePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePlan <a name="ServicePlan" id="@cdktn/provider-azurerm.servicePlan.ServicePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan azurerm_service_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlan;

ServicePlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .appServiceEnvironmentId(java.lang.String)
//  .id(java.lang.String)
//  .maximumElasticWorkerCount(java.lang.Number)
//  .perSiteScalingEnabled(java.lang.Boolean|IResolvable)
//  .premiumPlanAutoScaleEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ServicePlanTimeouts)
//  .workerCount(java.lang.Number)
//  .zoneBalancingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.appServiceEnvironmentId">appServiceEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.maximumElasticWorkerCount">maximumElasticWorkerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.perSiteScalingEnabled">perSiteScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.premiumPlanAutoScaleEnabled">premiumPlanAutoScaleEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.zoneBalancingEnabled">zoneBalancingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.osType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}.

---

##### `appServiceEnvironmentId`<sup>Optional</sup> <a name="appServiceEnvironmentId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.appServiceEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumElasticWorkerCount`<sup>Optional</sup> <a name="maximumElasticWorkerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.maximumElasticWorkerCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}.

---

##### `perSiteScalingEnabled`<sup>Optional</sup> <a name="perSiteScalingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.perSiteScalingEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}.

---

##### `premiumPlanAutoScaleEnabled`<sup>Optional</sup> <a name="premiumPlanAutoScaleEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.premiumPlanAutoScaleEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#timeouts ServicePlan#timeouts}

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.workerCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}.

---

##### `zoneBalancingEnabled`<sup>Optional</sup> <a name="zoneBalancingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.Initializer.parameter.zoneBalancingEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetAppServiceEnvironmentId">resetAppServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetMaximumElasticWorkerCount">resetMaximumElasticWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPerSiteScalingEnabled">resetPerSiteScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPremiumPlanAutoScaleEnabled">resetPremiumPlanAutoScaleEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.resetZoneBalancingEnabled">resetZoneBalancingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts"></a>

```java
public void putTimeouts(ServicePlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

---

##### `resetAppServiceEnvironmentId` <a name="resetAppServiceEnvironmentId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetAppServiceEnvironmentId"></a>

```java
public void resetAppServiceEnvironmentId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetId"></a>

```java
public void resetId()
```

##### `resetMaximumElasticWorkerCount` <a name="resetMaximumElasticWorkerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetMaximumElasticWorkerCount"></a>

```java
public void resetMaximumElasticWorkerCount()
```

##### `resetPerSiteScalingEnabled` <a name="resetPerSiteScalingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPerSiteScalingEnabled"></a>

```java
public void resetPerSiteScalingEnabled()
```

##### `resetPremiumPlanAutoScaleEnabled` <a name="resetPremiumPlanAutoScaleEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetPremiumPlanAutoScaleEnabled"></a>

```java
public void resetPremiumPlanAutoScaleEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetWorkerCount"></a>

```java
public void resetWorkerCount()
```

##### `resetZoneBalancingEnabled` <a name="resetZoneBalancingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.resetZoneBalancingEnabled"></a>

```java
public void resetZoneBalancingEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicePlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlan;

ServicePlan.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlan;

ServicePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlan;

ServicePlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlan;

ServicePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServicePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServicePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServicePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServicePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServicePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.reserved">reserved</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference">ServicePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentIdInput">appServiceEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCountInput">maximumElasticWorkerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabledInput">perSiteScalingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabledInput">premiumPlanAutoScaleEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCountInput">workerCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabledInput">zoneBalancingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentId">appServiceEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCount">maximumElasticWorkerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabled">perSiteScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabled">premiumPlanAutoScaleEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabled">zoneBalancingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `reserved`<sup>Required</sup> <a name="reserved" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.reserved"></a>

```java
public IResolvable getReserved();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeouts"></a>

```java
public ServicePlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference">ServicePlanTimeoutsOutputReference</a>

---

##### `appServiceEnvironmentIdInput`<sup>Optional</sup> <a name="appServiceEnvironmentIdInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentIdInput"></a>

```java
public java.lang.String getAppServiceEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maximumElasticWorkerCountInput`<sup>Optional</sup> <a name="maximumElasticWorkerCountInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCountInput"></a>

```java
public java.lang.Number getMaximumElasticWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `perSiteScalingEnabledInput`<sup>Optional</sup> <a name="perSiteScalingEnabledInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPerSiteScalingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `premiumPlanAutoScaleEnabledInput`<sup>Optional</sup> <a name="premiumPlanAutoScaleEnabledInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPremiumPlanAutoScaleEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.timeoutsInput"></a>

```java
public IResolvable|ServicePlanTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCountInput"></a>

```java
public java.lang.Number getWorkerCountInput();
```

- *Type:* java.lang.Number

---

##### `zoneBalancingEnabledInput`<sup>Optional</sup> <a name="zoneBalancingEnabledInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getZoneBalancingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `appServiceEnvironmentId`<sup>Required</sup> <a name="appServiceEnvironmentId" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.appServiceEnvironmentId"></a>

```java
public java.lang.String getAppServiceEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maximumElasticWorkerCount`<sup>Required</sup> <a name="maximumElasticWorkerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.maximumElasticWorkerCount"></a>

```java
public java.lang.Number getMaximumElasticWorkerCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `perSiteScalingEnabled`<sup>Required</sup> <a name="perSiteScalingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.perSiteScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPerSiteScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `premiumPlanAutoScaleEnabled`<sup>Required</sup> <a name="premiumPlanAutoScaleEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.premiumPlanAutoScaleEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPremiumPlanAutoScaleEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

---

##### `zoneBalancingEnabled`<sup>Required</sup> <a name="zoneBalancingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.zoneBalancingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getZoneBalancingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.servicePlan.ServicePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePlanConfig <a name="ServicePlanConfig" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlanConfig;

ServicePlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .osType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .appServiceEnvironmentId(java.lang.String)
//  .id(java.lang.String)
//  .maximumElasticWorkerCount(java.lang.Number)
//  .perSiteScalingEnabled(java.lang.Boolean|IResolvable)
//  .premiumPlanAutoScaleEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ServicePlanTimeouts)
//  .workerCount(java.lang.Number)
//  .zoneBalancingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.appServiceEnvironmentId">appServiceEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.maximumElasticWorkerCount">maximumElasticWorkerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.perSiteScalingEnabled">perSiteScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.premiumPlanAutoScaleEnabled">premiumPlanAutoScaleEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.workerCount">workerCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.zoneBalancingEnabled">zoneBalancingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#location ServicePlan#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#name ServicePlan#name}.

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#os_type ServicePlan#os_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#resource_group_name ServicePlan#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#sku_name ServicePlan#sku_name}.

---

##### `appServiceEnvironmentId`<sup>Optional</sup> <a name="appServiceEnvironmentId" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.appServiceEnvironmentId"></a>

```java
public java.lang.String getAppServiceEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#app_service_environment_id ServicePlan#app_service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#id ServicePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumElasticWorkerCount`<sup>Optional</sup> <a name="maximumElasticWorkerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.maximumElasticWorkerCount"></a>

```java
public java.lang.Number getMaximumElasticWorkerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#maximum_elastic_worker_count ServicePlan#maximum_elastic_worker_count}.

---

##### `perSiteScalingEnabled`<sup>Optional</sup> <a name="perSiteScalingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.perSiteScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPerSiteScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#per_site_scaling_enabled ServicePlan#per_site_scaling_enabled}.

---

##### `premiumPlanAutoScaleEnabled`<sup>Optional</sup> <a name="premiumPlanAutoScaleEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.premiumPlanAutoScaleEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPremiumPlanAutoScaleEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#premium_plan_auto_scale_enabled ServicePlan#premium_plan_auto_scale_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#tags ServicePlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.timeouts"></a>

```java
public ServicePlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#timeouts ServicePlan#timeouts}

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.workerCount"></a>

```java
public java.lang.Number getWorkerCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#worker_count ServicePlan#worker_count}.

---

##### `zoneBalancingEnabled`<sup>Optional</sup> <a name="zoneBalancingEnabled" id="@cdktn/provider-azurerm.servicePlan.ServicePlanConfig.property.zoneBalancingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getZoneBalancingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#zone_balancing_enabled ServicePlan#zone_balancing_enabled}.

---

### ServicePlanTimeouts <a name="ServicePlanTimeouts" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlanTimeouts;

ServicePlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#create ServicePlan#create}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#delete ServicePlan#delete}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#read ServicePlan#read}. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#update ServicePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#create ServicePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#delete ServicePlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#read ServicePlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/service_plan#update ServicePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePlanTimeoutsOutputReference <a name="ServicePlanTimeoutsOutputReference" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.service_plan.ServicePlanTimeoutsOutputReference;

new ServicePlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.servicePlan.ServicePlanTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ServicePlanTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.servicePlan.ServicePlanTimeouts">ServicePlanTimeouts</a>

---



