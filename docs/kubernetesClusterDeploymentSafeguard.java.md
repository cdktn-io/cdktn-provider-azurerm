# `kubernetesClusterDeploymentSafeguard` Submodule <a name="`kubernetesClusterDeploymentSafeguard` Submodule" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterDeploymentSafeguard <a name="KubernetesClusterDeploymentSafeguard" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard azurerm_kubernetes_cluster_deployment_safeguard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguard;

KubernetesClusterDeploymentSafeguard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kubernetesClusterId(java.lang.String)
    .level(java.lang.String)
//  .excludedNamespaces(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .podSecurityStandardsLevel(java.lang.String)
//  .timeouts(KubernetesClusterDeploymentSafeguardTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.excludedNamespaces">excludedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.podSecurityStandardsLevel">podSecurityStandardsLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.kubernetesClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}.

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.level"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}.

---

##### `excludedNamespaces`<sup>Optional</sup> <a name="excludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.excludedNamespaces"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `podSecurityStandardsLevel`<sup>Optional</sup> <a name="podSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.podSecurityStandardsLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#timeouts KubernetesClusterDeploymentSafeguard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetExcludedNamespaces">resetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetPodSecurityStandardsLevel">resetPodSecurityStandardsLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts"></a>

```java
public void putTimeouts(KubernetesClusterDeploymentSafeguardTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

---

##### `resetExcludedNamespaces` <a name="resetExcludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetExcludedNamespaces"></a>

```java
public void resetExcludedNamespaces()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetId"></a>

```java
public void resetId()
```

##### `resetPodSecurityStandardsLevel` <a name="resetPodSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetPodSecurityStandardsLevel"></a>

```java
public void resetPodSecurityStandardsLevel()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesClusterDeploymentSafeguard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguard;

KubernetesClusterDeploymentSafeguard.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguard;

KubernetesClusterDeploymentSafeguard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguard;

KubernetesClusterDeploymentSafeguard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguard;

KubernetesClusterDeploymentSafeguard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesClusterDeploymentSafeguard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KubernetesClusterDeploymentSafeguard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesClusterDeploymentSafeguard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesClusterDeploymentSafeguard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesClusterDeploymentSafeguard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference">KubernetesClusterDeploymentSafeguardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespacesInput">excludedNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterIdInput">kubernetesClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.levelInput">levelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevelInput">podSecurityStandardsLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespaces">excludedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevel">podSecurityStandardsLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeouts"></a>

```java
public KubernetesClusterDeploymentSafeguardTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference">KubernetesClusterDeploymentSafeguardTimeoutsOutputReference</a>

---

##### `excludedNamespacesInput`<sup>Optional</sup> <a name="excludedNamespacesInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterIdInput`<sup>Optional</sup> <a name="kubernetesClusterIdInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterIdInput"></a>

```java
public java.lang.String getKubernetesClusterIdInput();
```

- *Type:* java.lang.String

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.levelInput"></a>

```java
public java.lang.String getLevelInput();
```

- *Type:* java.lang.String

---

##### `podSecurityStandardsLevelInput`<sup>Optional</sup> <a name="podSecurityStandardsLevelInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevelInput"></a>

```java
public java.lang.String getPodSecurityStandardsLevelInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.timeoutsInput"></a>

```java
public IResolvable|KubernetesClusterDeploymentSafeguardTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

---

##### `excludedNamespaces`<sup>Required</sup> <a name="excludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.excludedNamespaces"></a>

```java
public java.util.List<java.lang.String> getExcludedNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `podSecurityStandardsLevel`<sup>Required</sup> <a name="podSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.podSecurityStandardsLevel"></a>

```java
public java.lang.String getPodSecurityStandardsLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterDeploymentSafeguardConfig <a name="KubernetesClusterDeploymentSafeguardConfig" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguardConfig;

KubernetesClusterDeploymentSafeguardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kubernetesClusterId(java.lang.String)
    .level(java.lang.String)
//  .excludedNamespaces(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .podSecurityStandardsLevel(java.lang.String)
//  .timeouts(KubernetesClusterDeploymentSafeguardTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.kubernetesClusterId">kubernetesClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.level">level</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.excludedNamespaces">excludedNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.podSecurityStandardsLevel">podSecurityStandardsLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kubernetesClusterId`<sup>Required</sup> <a name="kubernetesClusterId" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.kubernetesClusterId"></a>

```java
public java.lang.String getKubernetesClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#kubernetes_cluster_id KubernetesClusterDeploymentSafeguard#kubernetes_cluster_id}.

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#level KubernetesClusterDeploymentSafeguard#level}.

---

##### `excludedNamespaces`<sup>Optional</sup> <a name="excludedNamespaces" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.excludedNamespaces"></a>

```java
public java.util.List<java.lang.String> getExcludedNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#excluded_namespaces KubernetesClusterDeploymentSafeguard#excluded_namespaces}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#id KubernetesClusterDeploymentSafeguard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `podSecurityStandardsLevel`<sup>Optional</sup> <a name="podSecurityStandardsLevel" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.podSecurityStandardsLevel"></a>

```java
public java.lang.String getPodSecurityStandardsLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#pod_security_standards_level KubernetesClusterDeploymentSafeguard#pod_security_standards_level}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardConfig.property.timeouts"></a>

```java
public KubernetesClusterDeploymentSafeguardTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#timeouts KubernetesClusterDeploymentSafeguard#timeouts}

---

### KubernetesClusterDeploymentSafeguardTimeouts <a name="KubernetesClusterDeploymentSafeguardTimeouts" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguardTimeouts;

KubernetesClusterDeploymentSafeguardTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#create KubernetesClusterDeploymentSafeguard#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#delete KubernetesClusterDeploymentSafeguard#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#read KubernetesClusterDeploymentSafeguard#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/kubernetes_cluster_deployment_safeguard#update KubernetesClusterDeploymentSafeguard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterDeploymentSafeguardTimeoutsOutputReference <a name="KubernetesClusterDeploymentSafeguardTimeoutsOutputReference" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.kubernetes_cluster_deployment_safeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference;

new KubernetesClusterDeploymentSafeguardTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|KubernetesClusterDeploymentSafeguardTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.kubernetesClusterDeploymentSafeguard.KubernetesClusterDeploymentSafeguardTimeouts">KubernetesClusterDeploymentSafeguardTimeouts</a>

---



