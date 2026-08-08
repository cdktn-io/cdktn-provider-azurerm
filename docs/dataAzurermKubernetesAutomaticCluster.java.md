# `dataAzurermKubernetesAutomaticCluster` Submodule <a name="`dataAzurermKubernetesAutomaticCluster` Submodule" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesAutomaticCluster <a name="DataAzurermKubernetesAutomaticCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticCluster;

DataAzurermKubernetesAutomaticCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermKubernetesAutomaticClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#timeouts DataAzurermKubernetesAutomaticCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermKubernetesAutomaticClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermKubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticCluster;

DataAzurermKubernetesAutomaticCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticCluster;

DataAzurermKubernetesAutomaticCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticCluster;

DataAzurermKubernetesAutomaticCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticCluster;

DataAzurermKubernetesAutomaticCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermKubernetesAutomaticCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermKubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermKubernetesAutomaticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermKubernetesAutomaticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesAutomaticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.apiServerAccess">apiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList">DataAzurermKubernetesAutomaticClusterApiServerAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.currentKubernetesVersion">currentKubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dnsPrefix">dnsPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.hostedSystem">hostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList">DataAzurermKubernetesAutomaticClusterHostedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList">DataAzurermKubernetesAutomaticClusterIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList">DataAzurermKubernetesAutomaticClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfigRaw">kubeConfigRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeletIdentity">kubeletIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList">DataAzurermKubernetesAutomaticClusterKubeletIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroup">nodeResourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroupId">nodeResourceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.portalFullyQualifiedDomainName">portalFullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateCluster">privateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList">DataAzurermKubernetesAutomaticClusterPrivateClusterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateFullyQualifiedDomainName">privateFullyQualifiedDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.serviceMesh">serviceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList">DataAzurermKubernetesAutomaticClusterServiceMeshList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference">DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.webAppRoutingIngress">webAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `apiServerAccess`<sup>Required</sup> <a name="apiServerAccess" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.apiServerAccess"></a>

```java
public DataAzurermKubernetesAutomaticClusterApiServerAccessList getApiServerAccess();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList">DataAzurermKubernetesAutomaticClusterApiServerAccessList</a>

---

##### `currentKubernetesVersion`<sup>Required</sup> <a name="currentKubernetesVersion" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.currentKubernetesVersion"></a>

```java
public java.lang.String getCurrentKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `dnsPrefix`<sup>Required</sup> <a name="dnsPrefix" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.dnsPrefix"></a>

```java
public java.lang.String getDnsPrefix();
```

- *Type:* java.lang.String

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.fullyQualifiedDomainName"></a>

```java
public java.lang.String getFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `hostedSystem`<sup>Required</sup> <a name="hostedSystem" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.hostedSystem"></a>

```java
public DataAzurermKubernetesAutomaticClusterHostedSystemList getHostedSystem();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList">DataAzurermKubernetesAutomaticClusterHostedSystemList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.identity"></a>

```java
public DataAzurermKubernetesAutomaticClusterIdentityList getIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList">DataAzurermKubernetesAutomaticClusterIdentityList</a>

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfig"></a>

```java
public DataAzurermKubernetesAutomaticClusterKubeConfigList getKubeConfig();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList">DataAzurermKubernetesAutomaticClusterKubeConfigList</a>

---

##### `kubeConfigRaw`<sup>Required</sup> <a name="kubeConfigRaw" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeConfigRaw"></a>

```java
public java.lang.String getKubeConfigRaw();
```

- *Type:* java.lang.String

---

##### `kubeletIdentity`<sup>Required</sup> <a name="kubeletIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubeletIdentity"></a>

```java
public DataAzurermKubernetesAutomaticClusterKubeletIdentityList getKubeletIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList">DataAzurermKubernetesAutomaticClusterKubeletIdentityList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `nodeResourceGroup`<sup>Required</sup> <a name="nodeResourceGroup" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroup"></a>

```java
public java.lang.String getNodeResourceGroup();
```

- *Type:* java.lang.String

---

##### `nodeResourceGroupId`<sup>Required</sup> <a name="nodeResourceGroupId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nodeResourceGroupId"></a>

```java
public java.lang.String getNodeResourceGroupId();
```

- *Type:* java.lang.String

---

##### `portalFullyQualifiedDomainName`<sup>Required</sup> <a name="portalFullyQualifiedDomainName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.portalFullyQualifiedDomainName"></a>

```java
public java.lang.String getPortalFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `privateCluster`<sup>Required</sup> <a name="privateCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateCluster"></a>

```java
public DataAzurermKubernetesAutomaticClusterPrivateClusterList getPrivateCluster();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList">DataAzurermKubernetesAutomaticClusterPrivateClusterList</a>

---

##### `privateFullyQualifiedDomainName`<sup>Required</sup> <a name="privateFullyQualifiedDomainName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.privateFullyQualifiedDomainName"></a>

```java
public java.lang.String getPrivateFullyQualifiedDomainName();
```

- *Type:* java.lang.String

---

##### `serviceMesh`<sup>Required</sup> <a name="serviceMesh" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.serviceMesh"></a>

```java
public DataAzurermKubernetesAutomaticClusterServiceMeshList getServiceMesh();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList">DataAzurermKubernetesAutomaticClusterServiceMeshList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeouts"></a>

```java
public DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference">DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference</a>

---

##### `webAppRoutingIngress`<sup>Required</sup> <a name="webAppRoutingIngress" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.webAppRoutingIngress"></a>

```java
public DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList getWebAppRoutingIngress();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermKubernetesAutomaticClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesAutomaticClusterApiServerAccess <a name="DataAzurermKubernetesAutomaticClusterApiServerAccess" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterApiServerAccess;

DataAzurermKubernetesAutomaticClusterApiServerAccess.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterConfig <a name="DataAzurermKubernetesAutomaticClusterConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterConfig;

DataAzurermKubernetesAutomaticClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermKubernetesAutomaticClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#name DataAzurermKubernetesAutomaticCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#resource_group_name DataAzurermKubernetesAutomaticCluster#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#id DataAzurermKubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterConfig.property.timeouts"></a>

```java
public DataAzurermKubernetesAutomaticClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#timeouts DataAzurermKubernetesAutomaticCluster#timeouts}

---

### DataAzurermKubernetesAutomaticClusterHostedSystem <a name="DataAzurermKubernetesAutomaticClusterHostedSystem" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterHostedSystem;

DataAzurermKubernetesAutomaticClusterHostedSystem.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterIdentity <a name="DataAzurermKubernetesAutomaticClusterIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterIdentity;

DataAzurermKubernetesAutomaticClusterIdentity.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterKubeConfig <a name="DataAzurermKubernetesAutomaticClusterKubeConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterKubeConfig;

DataAzurermKubernetesAutomaticClusterKubeConfig.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterKubeletIdentity <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity;

DataAzurermKubernetesAutomaticClusterKubeletIdentity.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterPrivateCluster <a name="DataAzurermKubernetesAutomaticClusterPrivateCluster" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterPrivateCluster;

DataAzurermKubernetesAutomaticClusterPrivateCluster.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterServiceMesh <a name="DataAzurermKubernetesAutomaticClusterServiceMesh" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterServiceMesh;

DataAzurermKubernetesAutomaticClusterServiceMesh.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority;

DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterTimeouts <a name="DataAzurermKubernetesAutomaticClusterTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterTimeouts;

DataAzurermKubernetesAutomaticClusterTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/kubernetes_automatic_cluster#read DataAzurermKubernetesAutomaticCluster#read}.

---

### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress;

DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress.builder()
    .build();
```


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity;

DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesAutomaticClusterApiServerAccessList <a name="DataAzurermKubernetesAutomaticClusterApiServerAccessList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList;

new DataAzurermKubernetesAutomaticClusterApiServerAccessList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference <a name="DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference;

new DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges">authorizedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess">DataAzurermKubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizedIpRanges`<sup>Required</sup> <a name="authorizedIpRanges" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges"></a>

```java
public java.util.List<java.lang.String> getAuthorizedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterApiServerAccess getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterApiServerAccess">DataAzurermKubernetesAutomaticClusterApiServerAccess</a>

---


### DataAzurermKubernetesAutomaticClusterHostedSystemList <a name="DataAzurermKubernetesAutomaticClusterHostedSystemList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterHostedSystemList;

new DataAzurermKubernetesAutomaticClusterHostedSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference <a name="DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference;

new DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId">nodeSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId">systemNodeSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem">DataAzurermKubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeSubnetId`<sup>Required</sup> <a name="nodeSubnetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId"></a>

```java
public java.lang.String getNodeSubnetId();
```

- *Type:* java.lang.String

---

##### `systemNodeSubnetId`<sup>Required</sup> <a name="systemNodeSubnetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId"></a>

```java
public java.lang.String getSystemNodeSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterHostedSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterHostedSystem">DataAzurermKubernetesAutomaticClusterHostedSystem</a>

---


### DataAzurermKubernetesAutomaticClusterIdentityList <a name="DataAzurermKubernetesAutomaticClusterIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterIdentityList;

new DataAzurermKubernetesAutomaticClusterIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference;

new DataAzurermKubernetesAutomaticClusterIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity">DataAzurermKubernetesAutomaticClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterIdentity">DataAzurermKubernetesAutomaticClusterIdentity</a>

---


### DataAzurermKubernetesAutomaticClusterKubeConfigList <a name="DataAzurermKubernetesAutomaticClusterKubeConfigList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterKubeConfigList;

new DataAzurermKubernetesAutomaticClusterKubeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference <a name="DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference;

new DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig">DataAzurermKubernetesAutomaticClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterKubeConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeConfig">DataAzurermKubernetesAutomaticClusterKubeConfig</a>

---


### DataAzurermKubernetesAutomaticClusterKubeletIdentityList <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList;

new DataAzurermKubernetesAutomaticClusterKubeletIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference;

new DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity">DataAzurermKubernetesAutomaticClusterKubeletIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterKubeletIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterKubeletIdentity">DataAzurermKubernetesAutomaticClusterKubeletIdentity</a>

---


### DataAzurermKubernetesAutomaticClusterPrivateClusterList <a name="DataAzurermKubernetesAutomaticClusterPrivateClusterList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList;

new DataAzurermKubernetesAutomaticClusterPrivateClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference <a name="DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference;

new DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled">publicFullyQualifiedDomainNameEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster">DataAzurermKubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId"></a>

```java
public java.lang.String getPrivateDnsZoneId();
```

- *Type:* java.lang.String

---

##### `publicFullyQualifiedDomainNameEnabled`<sup>Required</sup> <a name="publicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled"></a>

```java
public IResolvable getPublicFullyQualifiedDomainNameEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterPrivateCluster getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterPrivateCluster">DataAzurermKubernetesAutomaticClusterPrivateCluster</a>

---


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList;

new DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference <a name="DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference;

new DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName">certificateChainObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName">certificateObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName">keyObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName">rootCertificateObjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateChainObjectName`<sup>Required</sup> <a name="certificateChainObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName"></a>

```java
public java.lang.String getCertificateChainObjectName();
```

- *Type:* java.lang.String

---

##### `certificateObjectName`<sup>Required</sup> <a name="certificateObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName"></a>

```java
public java.lang.String getCertificateObjectName();
```

- *Type:* java.lang.String

---

##### `keyObjectName`<sup>Required</sup> <a name="keyObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName"></a>

```java
public java.lang.String getKeyObjectName();
```

- *Type:* java.lang.String

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId"></a>

```java
public java.lang.String getKeyVaultId();
```

- *Type:* java.lang.String

---

##### `rootCertificateObjectName`<sup>Required</sup> <a name="rootCertificateObjectName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName"></a>

```java
public java.lang.String getRootCertificateObjectName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---


### DataAzurermKubernetesAutomaticClusterServiceMeshList <a name="DataAzurermKubernetesAutomaticClusterServiceMeshList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterServiceMeshList;

new DataAzurermKubernetesAutomaticClusterServiceMeshList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference <a name="DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference;

new DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled">externalIngressGatewayEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled">internalIngressGatewayEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism">proxyRedirectMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.revisions">revisions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh">DataAzurermKubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority"></a>

```java
public DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList getCertificateAuthority();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList">DataAzurermKubernetesAutomaticClusterServiceMeshCertificateAuthorityList</a>

---

##### `externalIngressGatewayEnabled`<sup>Required</sup> <a name="externalIngressGatewayEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled"></a>

```java
public IResolvable getExternalIngressGatewayEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalIngressGatewayEnabled`<sup>Required</sup> <a name="internalIngressGatewayEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled"></a>

```java
public IResolvable getInternalIngressGatewayEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `proxyRedirectMechanism`<sup>Required</sup> <a name="proxyRedirectMechanism" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism"></a>

```java
public java.lang.String getProxyRedirectMechanism();
```

- *Type:* java.lang.String

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.revisions"></a>

```java
public java.util.List<java.lang.String> getRevisions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterServiceMesh getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterServiceMesh">DataAzurermKubernetesAutomaticClusterServiceMesh</a>

---


### DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference <a name="DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference;

new DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermKubernetesAutomaticClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterTimeouts">DataAzurermKubernetesAutomaticClusterTimeouts</a>

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList;

new DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference;

new DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController">defaultNginxController</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds">dnsZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled">istioEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity">webAppRoutingIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultNginxController`<sup>Required</sup> <a name="defaultNginxController" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController"></a>

```java
public java.lang.String getDefaultNginxController();
```

- *Type:* java.lang.String

---

##### `dnsZoneIds`<sup>Required</sup> <a name="dnsZoneIds" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds"></a>

```java
public java.util.List<java.lang.String> getDnsZoneIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `istioEnabled`<sup>Required</sup> <a name="istioEnabled" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled"></a>

```java
public IResolvable getIstioEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `webAppRoutingIdentity`<sup>Required</sup> <a name="webAppRoutingIdentity" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity"></a>

```java
public DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList getWebAppRoutingIdentity();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngress</a>

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList;

new DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get"></a>

```java
public DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference <a name="DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_automatic_cluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference;

new DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId"></a>

```java
public java.lang.String getUserAssignedIdentityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue"></a>

```java
public DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesAutomaticCluster.DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">DataAzurermKubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a>

---



