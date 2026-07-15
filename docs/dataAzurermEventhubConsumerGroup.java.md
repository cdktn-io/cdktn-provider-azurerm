# `dataAzurermEventhubConsumerGroup` Submodule <a name="`dataAzurermEventhubConsumerGroup` Submodule" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermEventhubConsumerGroup <a name="DataAzurermEventhubConsumerGroup" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group azurerm_eventhub_consumer_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroup;

DataAzurermEventhubConsumerGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventhubName(java.lang.String)
    .name(java.lang.String)
    .namespaceName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermEventhubConsumerGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.eventhubName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.namespaceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#timeouts DataAzurermEventhubConsumerGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermEventhubConsumerGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermEventhubConsumerGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroup;

DataAzurermEventhubConsumerGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroup;

DataAzurermEventhubConsumerGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroup;

DataAzurermEventhubConsumerGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroup;

DataAzurermEventhubConsumerGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermEventhubConsumerGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermEventhubConsumerGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermEventhubConsumerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermEventhubConsumerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermEventhubConsumerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference">DataAzurermEventhubConsumerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.userMetadata">userMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubNameInput">eventhubNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeouts"></a>

```java
public DataAzurermEventhubConsumerGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference">DataAzurermEventhubConsumerGroupTimeoutsOutputReference</a>

---

##### `userMetadata`<sup>Required</sup> <a name="userMetadata" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.userMetadata"></a>

```java
public java.lang.String getUserMetadata();
```

- *Type:* java.lang.String

---

##### `eventhubNameInput`<sup>Optional</sup> <a name="eventhubNameInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubNameInput"></a>

```java
public java.lang.String getEventhubNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermEventhubConsumerGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermEventhubConsumerGroupConfig <a name="DataAzurermEventhubConsumerGroupConfig" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroupConfig;

DataAzurermEventhubConsumerGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .eventhubName(java.lang.String)
    .name(java.lang.String)
    .namespaceName(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermEventhubConsumerGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.eventhubName">eventhubName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `eventhubName`<sup>Required</sup> <a name="eventhubName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.eventhubName"></a>

```java
public java.lang.String getEventhubName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.timeouts"></a>

```java
public DataAzurermEventhubConsumerGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#timeouts DataAzurermEventhubConsumerGroup#timeouts}

---

### DataAzurermEventhubConsumerGroupTimeouts <a name="DataAzurermEventhubConsumerGroupTimeouts" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroupTimeouts;

DataAzurermEventhubConsumerGroupTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#read DataAzurermEventhubConsumerGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/data-sources/eventhub_consumer_group#read DataAzurermEventhubConsumerGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermEventhubConsumerGroupTimeoutsOutputReference <a name="DataAzurermEventhubConsumerGroupTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_eventhub_consumer_group.DataAzurermEventhubConsumerGroupTimeoutsOutputReference;

new DataAzurermEventhubConsumerGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermEventhubConsumerGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

---



