# `dataAzurermKubernetesNodePoolSnapshot` Submodule <a name="`dataAzurermKubernetesNodePoolSnapshot` Submodule" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesNodePoolSnapshot <a name="DataAzurermKubernetesNodePoolSnapshot" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot azurerm_kubernetes_node_pool_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshot;

DataAzurermKubernetesNodePoolSnapshot.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermKubernetesNodePoolSnapshotTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#timeouts DataAzurermKubernetesNodePoolSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermKubernetesNodePoolSnapshotTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermKubernetesNodePoolSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshot;

DataAzurermKubernetesNodePoolSnapshot.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshot;

DataAzurermKubernetesNodePoolSnapshot.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshot;

DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshot;

DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermKubernetesNodePoolSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermKubernetesNodePoolSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermKubernetesNodePoolSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermKubernetesNodePoolSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.sourceNodePoolId">sourceNodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference">DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `sourceNodePoolId`<sup>Required</sup> <a name="sourceNodePoolId" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.sourceNodePoolId"></a>

```java
public java.lang.String getSourceNodePoolId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeouts"></a>

```java
public DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference">DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermKubernetesNodePoolSnapshotTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshot.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesNodePoolSnapshotConfig <a name="DataAzurermKubernetesNodePoolSnapshotConfig" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshotConfig;

DataAzurermKubernetesNodePoolSnapshotConfig.builder()
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
//  .timeouts(DataAzurermKubernetesNodePoolSnapshotTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#name DataAzurermKubernetesNodePoolSnapshot#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#resource_group_name DataAzurermKubernetesNodePoolSnapshot#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#id DataAzurermKubernetesNodePoolSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotConfig.property.timeouts"></a>

```java
public DataAzurermKubernetesNodePoolSnapshotTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#timeouts DataAzurermKubernetesNodePoolSnapshot#timeouts}

---

### DataAzurermKubernetesNodePoolSnapshotTimeouts <a name="DataAzurermKubernetesNodePoolSnapshotTimeouts" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts;

DataAzurermKubernetesNodePoolSnapshotTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#read DataAzurermKubernetesNodePoolSnapshot#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/data-sources/kubernetes_node_pool_snapshot#read DataAzurermKubernetesNodePoolSnapshot#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference <a name="DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_kubernetes_node_pool_snapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference;

new DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermKubernetesNodePoolSnapshotTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermKubernetesNodePoolSnapshot.DataAzurermKubernetesNodePoolSnapshotTimeouts">DataAzurermKubernetesNodePoolSnapshotTimeouts</a>

---



