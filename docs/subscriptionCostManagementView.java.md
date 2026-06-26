# `subscriptionCostManagementView` Submodule <a name="`subscriptionCostManagementView` Submodule" id="@cdktn/provider-azurerm.subscriptionCostManagementView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionCostManagementView <a name="SubscriptionCostManagementView" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view azurerm_subscription_cost_management_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementView;

SubscriptionCostManagementView.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accumulated(java.lang.Boolean|IResolvable)
    .chartType(java.lang.String)
    .dataset(SubscriptionCostManagementViewDataset)
    .displayName(java.lang.String)
    .name(java.lang.String)
    .reportType(java.lang.String)
    .subscriptionId(java.lang.String)
    .timeframe(java.lang.String)
//  .id(java.lang.String)
//  .kpi(IResolvable|java.util.List<SubscriptionCostManagementViewKpi>)
//  .pivot(IResolvable|java.util.List<SubscriptionCostManagementViewPivot>)
//  .timeouts(SubscriptionCostManagementViewTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.accumulated">accumulated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.chartType">chartType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dataset">dataset</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.reportType">reportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeframe">timeframe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.kpi">kpi</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>></code> | kpi block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.pivot">pivot</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>></code> | pivot block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.accumulated"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}.

---

##### `chartType`<sup>Required</sup> <a name="chartType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.chartType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.dataset"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#dataset SubscriptionCostManagementView#dataset}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.reportType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeframe"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.kpi"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>>

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#kpi SubscriptionCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.pivot"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>>

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#pivot SubscriptionCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#timeouts SubscriptionCostManagementView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset">putDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putKpi">putKpi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putPivot">putPivot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetKpi">resetKpi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetPivot">resetPivot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataset` <a name="putDataset" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset"></a>

```java
public void putDataset(SubscriptionCostManagementViewDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

---

##### `putKpi` <a name="putKpi" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putKpi"></a>

```java
public void putKpi(IResolvable|java.util.List<SubscriptionCostManagementViewKpi> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putKpi.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>>

---

##### `putPivot` <a name="putPivot" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putPivot"></a>

```java
public void putPivot(IResolvable|java.util.List<SubscriptionCostManagementViewPivot> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putPivot.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts"></a>

```java
public void putTimeouts(SubscriptionCostManagementViewTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetId"></a>

```java
public void resetId()
```

##### `resetKpi` <a name="resetKpi" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetKpi"></a>

```java
public void resetKpi()
```

##### `resetPivot` <a name="resetPivot" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetPivot"></a>

```java
public void resetPivot()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SubscriptionCostManagementView resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementView;

SubscriptionCostManagementView.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementView;

SubscriptionCostManagementView.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementView;

SubscriptionCostManagementView.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementView;

SubscriptionCostManagementView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SubscriptionCostManagementView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SubscriptionCostManagementView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SubscriptionCostManagementView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SubscriptionCostManagementView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SubscriptionCostManagementView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dataset">dataset</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference">SubscriptionCostManagementViewDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpi">kpi</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList">SubscriptionCostManagementViewKpiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivot">pivot</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList">SubscriptionCostManagementViewPivotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference">SubscriptionCostManagementViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulatedInput">accumulatedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartTypeInput">chartTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.datasetInput">datasetInput</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpiInput">kpiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivotInput">pivotInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportTypeInput">reportTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframeInput">timeframeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulated">accumulated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartType">chartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportType">reportType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.dataset"></a>

```java
public SubscriptionCostManagementViewDatasetOutputReference getDataset();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference">SubscriptionCostManagementViewDatasetOutputReference</a>

---

##### `kpi`<sup>Required</sup> <a name="kpi" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpi"></a>

```java
public SubscriptionCostManagementViewKpiList getKpi();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList">SubscriptionCostManagementViewKpiList</a>

---

##### `pivot`<sup>Required</sup> <a name="pivot" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivot"></a>

```java
public SubscriptionCostManagementViewPivotList getPivot();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList">SubscriptionCostManagementViewPivotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeouts"></a>

```java
public SubscriptionCostManagementViewTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference">SubscriptionCostManagementViewTimeoutsOutputReference</a>

---

##### `accumulatedInput`<sup>Optional</sup> <a name="accumulatedInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulatedInput"></a>

```java
public java.lang.Boolean|IResolvable getAccumulatedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chartTypeInput`<sup>Optional</sup> <a name="chartTypeInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartTypeInput"></a>

```java
public java.lang.String getChartTypeInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.datasetInput"></a>

```java
public SubscriptionCostManagementViewDataset getDatasetInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kpiInput`<sup>Optional</sup> <a name="kpiInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.kpiInput"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewKpi> getKpiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pivotInput`<sup>Optional</sup> <a name="pivotInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.pivotInput"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewPivot> getPivotInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>>

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportTypeInput"></a>

```java
public java.lang.String getReportTypeInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeframeInput`<sup>Optional</sup> <a name="timeframeInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframeInput"></a>

```java
public java.lang.String getTimeframeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeoutsInput"></a>

```java
public IResolvable|SubscriptionCostManagementViewTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.accumulated"></a>

```java
public java.lang.Boolean|IResolvable getAccumulated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `chartType`<sup>Required</sup> <a name="chartType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.chartType"></a>

```java
public java.lang.String getChartType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementView.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionCostManagementViewConfig <a name="SubscriptionCostManagementViewConfig" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewConfig;

SubscriptionCostManagementViewConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accumulated(java.lang.Boolean|IResolvable)
    .chartType(java.lang.String)
    .dataset(SubscriptionCostManagementViewDataset)
    .displayName(java.lang.String)
    .name(java.lang.String)
    .reportType(java.lang.String)
    .subscriptionId(java.lang.String)
    .timeframe(java.lang.String)
//  .id(java.lang.String)
//  .kpi(IResolvable|java.util.List<SubscriptionCostManagementViewKpi>)
//  .pivot(IResolvable|java.util.List<SubscriptionCostManagementViewPivot>)
//  .timeouts(SubscriptionCostManagementViewTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.accumulated">accumulated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.chartType">chartType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dataset">dataset</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | dataset block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.reportType">reportType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeframe">timeframe</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.kpi">kpi</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>></code> | kpi block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.pivot">pivot</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>></code> | pivot block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accumulated`<sup>Required</sup> <a name="accumulated" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.accumulated"></a>

```java
public java.lang.Boolean|IResolvable getAccumulated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#accumulated SubscriptionCostManagementView#accumulated}.

---

##### `chartType`<sup>Required</sup> <a name="chartType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.chartType"></a>

```java
public java.lang.String getChartType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#chart_type SubscriptionCostManagementView#chart_type}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.dataset"></a>

```java
public SubscriptionCostManagementViewDataset getDataset();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#dataset SubscriptionCostManagementView#dataset}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#display_name SubscriptionCostManagementView#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.reportType"></a>

```java
public java.lang.String getReportType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#report_type SubscriptionCostManagementView#report_type}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#subscription_id SubscriptionCostManagementView#subscription_id}.

---

##### `timeframe`<sup>Required</sup> <a name="timeframe" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeframe"></a>

```java
public java.lang.String getTimeframe();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#timeframe SubscriptionCostManagementView#timeframe}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#id SubscriptionCostManagementView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kpi`<sup>Optional</sup> <a name="kpi" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.kpi"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewKpi> getKpi();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>>

kpi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#kpi SubscriptionCostManagementView#kpi}

---

##### `pivot`<sup>Optional</sup> <a name="pivot" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.pivot"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewPivot> getPivot();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>>

pivot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#pivot SubscriptionCostManagementView#pivot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewConfig.property.timeouts"></a>

```java
public SubscriptionCostManagementViewTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#timeouts SubscriptionCostManagementView#timeouts}

---

### SubscriptionCostManagementViewDataset <a name="SubscriptionCostManagementViewDataset" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDataset;

SubscriptionCostManagementViewDataset.builder()
    .aggregation(IResolvable|java.util.List<SubscriptionCostManagementViewDatasetAggregation>)
    .granularity(java.lang.String)
//  .grouping(IResolvable|java.util.List<SubscriptionCostManagementViewDatasetGrouping>)
//  .sorting(IResolvable|java.util.List<SubscriptionCostManagementViewDatasetSorting>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.aggregation">aggregation</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>></code> | aggregation block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.granularity">granularity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#granularity SubscriptionCostManagementView#granularity}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.grouping">grouping</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>></code> | grouping block. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.sorting">sorting</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>></code> | sorting block. |

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.aggregation"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetAggregation> getAggregation();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>>

aggregation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#aggregation SubscriptionCostManagementView#aggregation}

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#granularity SubscriptionCostManagementView#granularity}.

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.grouping"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetGrouping> getGrouping();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#grouping SubscriptionCostManagementView#grouping}

---

##### `sorting`<sup>Optional</sup> <a name="sorting" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset.property.sorting"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetSorting> getSorting();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>>

sorting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#sorting SubscriptionCostManagementView#sorting}

---

### SubscriptionCostManagementViewDatasetAggregation <a name="SubscriptionCostManagementViewDatasetAggregation" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetAggregation;

SubscriptionCostManagementViewDatasetAggregation.builder()
    .columnName(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#column_name SubscriptionCostManagementView#column_name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#column_name SubscriptionCostManagementView#column_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

### SubscriptionCostManagementViewDatasetGrouping <a name="SubscriptionCostManagementViewDatasetGrouping" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetGrouping;

SubscriptionCostManagementViewDatasetGrouping.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}.

---

### SubscriptionCostManagementViewDatasetSorting <a name="SubscriptionCostManagementViewDatasetSorting" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetSorting;

SubscriptionCostManagementViewDatasetSorting.builder()
    .direction(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#direction SubscriptionCostManagementView#direction}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#direction SubscriptionCostManagementView#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

### SubscriptionCostManagementViewKpi <a name="SubscriptionCostManagementViewKpi" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewKpi;

SubscriptionCostManagementViewKpi.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}.

---

### SubscriptionCostManagementViewPivot <a name="SubscriptionCostManagementViewPivot" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewPivot;

SubscriptionCostManagementViewPivot.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#name SubscriptionCostManagementView#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#type SubscriptionCostManagementView#type}.

---

### SubscriptionCostManagementViewTimeouts <a name="SubscriptionCostManagementViewTimeouts" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewTimeouts;

SubscriptionCostManagementViewTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#create SubscriptionCostManagementView#create}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#delete SubscriptionCostManagementView#delete}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#read SubscriptionCostManagementView#read}. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#update SubscriptionCostManagementView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#create SubscriptionCostManagementView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#delete SubscriptionCostManagementView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#read SubscriptionCostManagementView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/subscription_cost_management_view#update SubscriptionCostManagementView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionCostManagementViewDatasetAggregationList <a name="SubscriptionCostManagementViewDatasetAggregationList" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetAggregationList;

new SubscriptionCostManagementViewDatasetAggregationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.get"></a>

```java
public SubscriptionCostManagementViewDatasetAggregationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetAggregation> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>>

---


### SubscriptionCostManagementViewDatasetAggregationOutputReference <a name="SubscriptionCostManagementViewDatasetAggregationOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetAggregationOutputReference;

new SubscriptionCostManagementViewDatasetAggregationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationOutputReference.property.internalValue"></a>

```java
public IResolvable|SubscriptionCostManagementViewDatasetAggregation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>

---


### SubscriptionCostManagementViewDatasetGroupingList <a name="SubscriptionCostManagementViewDatasetGroupingList" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetGroupingList;

new SubscriptionCostManagementViewDatasetGroupingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.get"></a>

```java
public SubscriptionCostManagementViewDatasetGroupingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetGrouping> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>>

---


### SubscriptionCostManagementViewDatasetGroupingOutputReference <a name="SubscriptionCostManagementViewDatasetGroupingOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetGroupingOutputReference;

new SubscriptionCostManagementViewDatasetGroupingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingOutputReference.property.internalValue"></a>

```java
public IResolvable|SubscriptionCostManagementViewDatasetGrouping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>

---


### SubscriptionCostManagementViewDatasetOutputReference <a name="SubscriptionCostManagementViewDatasetOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetOutputReference;

new SubscriptionCostManagementViewDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putAggregation">putAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putGrouping">putGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putSorting">putSorting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetGrouping">resetGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetSorting">resetSorting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAggregation` <a name="putAggregation" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putAggregation"></a>

```java
public void putAggregation(IResolvable|java.util.List<SubscriptionCostManagementViewDatasetAggregation> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putAggregation.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>>

---

##### `putGrouping` <a name="putGrouping" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putGrouping"></a>

```java
public void putGrouping(IResolvable|java.util.List<SubscriptionCostManagementViewDatasetGrouping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putGrouping.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>>

---

##### `putSorting` <a name="putSorting" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putSorting"></a>

```java
public void putSorting(IResolvable|java.util.List<SubscriptionCostManagementViewDatasetSorting> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.putSorting.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>>

---

##### `resetGrouping` <a name="resetGrouping" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetGrouping"></a>

```java
public void resetGrouping()
```

##### `resetSorting` <a name="resetSorting" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.resetSorting"></a>

```java
public void resetSorting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList">SubscriptionCostManagementViewDatasetAggregationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.grouping">grouping</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList">SubscriptionCostManagementViewDatasetGroupingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sorting">sorting</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList">SubscriptionCostManagementViewDatasetSortingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularityInput">granularityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.groupingInput">groupingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sortingInput">sortingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregation"></a>

```java
public SubscriptionCostManagementViewDatasetAggregationList getAggregation();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregationList">SubscriptionCostManagementViewDatasetAggregationList</a>

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.grouping"></a>

```java
public SubscriptionCostManagementViewDatasetGroupingList getGrouping();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGroupingList">SubscriptionCostManagementViewDatasetGroupingList</a>

---

##### `sorting`<sup>Required</sup> <a name="sorting" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sorting"></a>

```java
public SubscriptionCostManagementViewDatasetSortingList getSorting();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList">SubscriptionCostManagementViewDatasetSortingList</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.aggregationInput"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetAggregation> getAggregationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetAggregation">SubscriptionCostManagementViewDatasetAggregation</a>>

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularityInput"></a>

```java
public java.lang.String getGranularityInput();
```

- *Type:* java.lang.String

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.groupingInput"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetGrouping> getGroupingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetGrouping">SubscriptionCostManagementViewDatasetGrouping</a>>

---

##### `sortingInput`<sup>Optional</sup> <a name="sortingInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.sortingInput"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetSorting> getSortingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetOutputReference.property.internalValue"></a>

```java
public SubscriptionCostManagementViewDataset getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDataset">SubscriptionCostManagementViewDataset</a>

---


### SubscriptionCostManagementViewDatasetSortingList <a name="SubscriptionCostManagementViewDatasetSortingList" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetSortingList;

new SubscriptionCostManagementViewDatasetSortingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.get"></a>

```java
public SubscriptionCostManagementViewDatasetSortingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewDatasetSorting> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>>

---


### SubscriptionCostManagementViewDatasetSortingOutputReference <a name="SubscriptionCostManagementViewDatasetSortingOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewDatasetSortingOutputReference;

new SubscriptionCostManagementViewDatasetSortingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSortingOutputReference.property.internalValue"></a>

```java
public IResolvable|SubscriptionCostManagementViewDatasetSorting getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewDatasetSorting">SubscriptionCostManagementViewDatasetSorting</a>

---


### SubscriptionCostManagementViewKpiList <a name="SubscriptionCostManagementViewKpiList" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewKpiList;

new SubscriptionCostManagementViewKpiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.get"></a>

```java
public SubscriptionCostManagementViewKpiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewKpi> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>>

---


### SubscriptionCostManagementViewKpiOutputReference <a name="SubscriptionCostManagementViewKpiOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewKpiOutputReference;

new SubscriptionCostManagementViewKpiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpiOutputReference.property.internalValue"></a>

```java
public IResolvable|SubscriptionCostManagementViewKpi getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewKpi">SubscriptionCostManagementViewKpi</a>

---


### SubscriptionCostManagementViewPivotList <a name="SubscriptionCostManagementViewPivotList" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewPivotList;

new SubscriptionCostManagementViewPivotList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.get"></a>

```java
public SubscriptionCostManagementViewPivotOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SubscriptionCostManagementViewPivot> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>>

---


### SubscriptionCostManagementViewPivotOutputReference <a name="SubscriptionCostManagementViewPivotOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewPivotOutputReference;

new SubscriptionCostManagementViewPivotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivotOutputReference.property.internalValue"></a>

```java
public IResolvable|SubscriptionCostManagementViewPivot getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewPivot">SubscriptionCostManagementViewPivot</a>

---


### SubscriptionCostManagementViewTimeoutsOutputReference <a name="SubscriptionCostManagementViewTimeoutsOutputReference" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.subscription_cost_management_view.SubscriptionCostManagementViewTimeoutsOutputReference;

new SubscriptionCostManagementViewTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SubscriptionCostManagementViewTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.subscriptionCostManagementView.SubscriptionCostManagementViewTimeouts">SubscriptionCostManagementViewTimeouts</a>

---



