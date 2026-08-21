# `dataAzurermNetappVolumeBucketWithServer` Submodule <a name="`dataAzurermNetappVolumeBucketWithServer` Submodule" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeBucketWithServer <a name="DataAzurermNetappVolumeBucketWithServer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server azurerm_netapp_volume_bucket_with_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServer;

DataAzurermNetappVolumeBucketWithServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .netappVolumeId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetappVolumeBucketWithServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.netappVolumeId">netappVolumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}.

---

##### `netappVolumeId`<sup>Required</sup> <a name="netappVolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.netappVolumeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#timeouts DataAzurermNetappVolumeBucketWithServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermNetappVolumeBucketWithServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermNetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServer;

DataAzurermNetappVolumeBucketWithServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServer;

DataAzurermNetappVolumeBucketWithServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServer;

DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServer;

DataAzurermNetappVolumeBucketWithServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermNetappVolumeBucketWithServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermNetappVolumeBucketWithServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermNetappVolumeBucketWithServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermNetappVolumeBucketWithServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeBucketWithServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemCifsUsername">fileSystemCifsUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemNfsUser">fileSystemNfsUser</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.keyVault">keyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList">DataAzurermNetappVolumeBucketWithServerKeyVaultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.server">server</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList">DataAzurermNetappVolumeBucketWithServerServerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateCommonName">serverCertificateCommonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateExpiryDate">serverCertificateExpiryDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverIpAddress">serverIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference">DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeIdInput">netappVolumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeId">netappVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `fileSystemCifsUsername`<sup>Required</sup> <a name="fileSystemCifsUsername" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemCifsUsername"></a>

```java
public java.lang.String getFileSystemCifsUsername();
```

- *Type:* java.lang.String

---

##### `fileSystemNfsUser`<sup>Required</sup> <a name="fileSystemNfsUser" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.fileSystemNfsUser"></a>

```java
public DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList getFileSystemNfsUser();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList</a>

---

##### `keyVault`<sup>Required</sup> <a name="keyVault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.keyVault"></a>

```java
public DataAzurermNetappVolumeBucketWithServerKeyVaultList getKeyVault();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList">DataAzurermNetappVolumeBucketWithServerKeyVaultList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.server"></a>

```java
public DataAzurermNetappVolumeBucketWithServerServerList getServer();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList">DataAzurermNetappVolumeBucketWithServerServerList</a>

---

##### `serverCertificateCommonName`<sup>Required</sup> <a name="serverCertificateCommonName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateCommonName"></a>

```java
public java.lang.String getServerCertificateCommonName();
```

- *Type:* java.lang.String

---

##### `serverCertificateExpiryDate`<sup>Required</sup> <a name="serverCertificateExpiryDate" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverCertificateExpiryDate"></a>

```java
public java.lang.String getServerCertificateExpiryDate();
```

- *Type:* java.lang.String

---

##### `serverIpAddress`<sup>Required</sup> <a name="serverIpAddress" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.serverIpAddress"></a>

```java
public java.lang.String getServerIpAddress();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeouts"></a>

```java
public DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference">DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `netappVolumeIdInput`<sup>Optional</sup> <a name="netappVolumeIdInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeIdInput"></a>

```java
public java.lang.String getNetappVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermNetappVolumeBucketWithServerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `netappVolumeId`<sup>Required</sup> <a name="netappVolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.netappVolumeId"></a>

```java
public java.lang.String getNetappVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeBucketWithServerConfig <a name="DataAzurermNetappVolumeBucketWithServerConfig" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerConfig;

DataAzurermNetappVolumeBucketWithServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .netappVolumeId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetappVolumeBucketWithServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.netappVolumeId">netappVolumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#name DataAzurermNetappVolumeBucketWithServer#name}.

---

##### `netappVolumeId`<sup>Required</sup> <a name="netappVolumeId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.netappVolumeId"></a>

```java
public java.lang.String getNetappVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#netapp_volume_id DataAzurermNetappVolumeBucketWithServer#netapp_volume_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#id DataAzurermNetappVolumeBucketWithServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerConfig.property.timeouts"></a>

```java
public DataAzurermNetappVolumeBucketWithServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#timeouts DataAzurermNetappVolumeBucketWithServer#timeouts}

---

### DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser <a name="DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser;

DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser.builder()
    .build();
```


### DataAzurermNetappVolumeBucketWithServerKeyVault <a name="DataAzurermNetappVolumeBucketWithServerKeyVault" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerKeyVault;

DataAzurermNetappVolumeBucketWithServerKeyVault.builder()
    .build();
```


### DataAzurermNetappVolumeBucketWithServerServer <a name="DataAzurermNetappVolumeBucketWithServerServer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerServer;

DataAzurermNetappVolumeBucketWithServerServer.builder()
    .build();
```


### DataAzurermNetappVolumeBucketWithServerTimeouts <a name="DataAzurermNetappVolumeBucketWithServerTimeouts" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerTimeouts;

DataAzurermNetappVolumeBucketWithServerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#read DataAzurermNetappVolumeBucketWithServer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/data-sources/netapp_volume_bucket_with_server#read DataAzurermNetappVolumeBucketWithServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList <a name="DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList;

new DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.get"></a>

```java
public DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference <a name="DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference;

new DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId">groupId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId">userId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.groupId"></a>

```java
public java.lang.Number getGroupId();
```

- *Type:* java.lang.Number

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.userId"></a>

```java
public java.lang.Number getUserId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUserOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser">DataAzurermNetappVolumeBucketWithServerFileSystemNfsUser</a>

---


### DataAzurermNetappVolumeBucketWithServerKeyVaultList <a name="DataAzurermNetappVolumeBucketWithServerKeyVaultList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerKeyVaultList;

new DataAzurermNetappVolumeBucketWithServerKeyVaultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.get"></a>

```java
public DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference <a name="DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference;

new DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri">certificateKeyVaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName">certificateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri">credentialsKeyVaultUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName">credentialsSecretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault">DataAzurermNetappVolumeBucketWithServerKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateKeyVaultUri`<sup>Required</sup> <a name="certificateKeyVaultUri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateKeyVaultUri"></a>

```java
public java.lang.String getCertificateKeyVaultUri();
```

- *Type:* java.lang.String

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.certificateName"></a>

```java
public java.lang.String getCertificateName();
```

- *Type:* java.lang.String

---

##### `credentialsKeyVaultUri`<sup>Required</sup> <a name="credentialsKeyVaultUri" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsKeyVaultUri"></a>

```java
public java.lang.String getCredentialsKeyVaultUri();
```

- *Type:* java.lang.String

---

##### `credentialsSecretName`<sup>Required</sup> <a name="credentialsSecretName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.credentialsSecretName"></a>

```java
public java.lang.String getCredentialsSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVaultOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeBucketWithServerKeyVault getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerKeyVault">DataAzurermNetappVolumeBucketWithServerKeyVault</a>

---


### DataAzurermNetappVolumeBucketWithServerServerList <a name="DataAzurermNetappVolumeBucketWithServerServerList" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerServerList;

new DataAzurermNetappVolumeBucketWithServerServerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.get"></a>

```java
public DataAzurermNetappVolumeBucketWithServerServerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeBucketWithServerServerOutputReference <a name="DataAzurermNetappVolumeBucketWithServerServerOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerServerOutputReference;

new DataAzurermNetappVolumeBucketWithServerServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.certificatePem">certificatePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction">onCertificateConflictAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer">DataAzurermNetappVolumeBucketWithServerServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificatePem`<sup>Required</sup> <a name="certificatePem" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.certificatePem"></a>

```java
public java.lang.String getCertificatePem();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `onCertificateConflictAction`<sup>Required</sup> <a name="onCertificateConflictAction" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.onCertificateConflictAction"></a>

```java
public java.lang.String getOnCertificateConflictAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServerOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeBucketWithServerServer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerServer">DataAzurermNetappVolumeBucketWithServerServer</a>

---


### DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference <a name="DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_netapp_volume_bucket_with_server.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference;

new DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermNetappVolumeBucketWithServerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermNetappVolumeBucketWithServer.DataAzurermNetappVolumeBucketWithServerTimeouts">DataAzurermNetappVolumeBucketWithServerTimeouts</a>

---



