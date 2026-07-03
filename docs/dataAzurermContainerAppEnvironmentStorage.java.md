# `dataAzurermContainerAppEnvironmentStorage` Submodule <a name="`dataAzurermContainerAppEnvironmentStorage` Submodule" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerAppEnvironmentStorage <a name="DataAzurermContainerAppEnvironmentStorage" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage azurerm_container_app_environment_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorage;

DataAzurermContainerAppEnvironmentStorage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermContainerAppEnvironmentStorageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The ID of the Container App Environment to which this storage belongs. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for this Container App Environment Storage. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* java.lang.String

The ID of the Container App Environment to which this storage belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#container_app_environment_id DataAzurermContainerAppEnvironmentStorage#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for this Container App Environment Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#name DataAzurermContainerAppEnvironmentStorage#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#timeouts DataAzurermContainerAppEnvironmentStorage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermContainerAppEnvironmentStorageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentStorage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorage;

DataAzurermContainerAppEnvironmentStorage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorage;

DataAzurermContainerAppEnvironmentStorage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorage;

DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorage;

DataAzurermContainerAppEnvironmentStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermContainerAppEnvironmentStorage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermContainerAppEnvironmentStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermContainerAppEnvironmentStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerAppEnvironmentStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nfsServerUrl">nfsServerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference">DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `nfsServerUrl`<sup>Required</sup> <a name="nfsServerUrl" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nfsServerUrl"></a>

```java
public java.lang.String getNfsServerUrl();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeouts"></a>

```java
public DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference">DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference</a>

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentIdInput"></a>

```java
public java.lang.String getContainerAppEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermContainerAppEnvironmentStorageTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerAppEnvironmentStorageConfig <a name="DataAzurermContainerAppEnvironmentStorageConfig" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorageConfig;

DataAzurermContainerAppEnvironmentStorageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermContainerAppEnvironmentStorageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The ID of the Container App Environment to which this storage belongs. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for this Container App Environment Storage. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

The ID of the Container App Environment to which this storage belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#container_app_environment_id DataAzurermContainerAppEnvironmentStorage#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this Container App Environment Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#name DataAzurermContainerAppEnvironmentStorage#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#id DataAzurermContainerAppEnvironmentStorage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageConfig.property.timeouts"></a>

```java
public DataAzurermContainerAppEnvironmentStorageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#timeouts DataAzurermContainerAppEnvironmentStorage#timeouts}

---

### DataAzurermContainerAppEnvironmentStorageTimeouts <a name="DataAzurermContainerAppEnvironmentStorageTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorageTimeouts;

DataAzurermContainerAppEnvironmentStorageTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/container_app_environment_storage#read DataAzurermContainerAppEnvironmentStorage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference <a name="DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_storage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference;

new DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermContainerAppEnvironmentStorageTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentStorage.DataAzurermContainerAppEnvironmentStorageTimeouts">DataAzurermContainerAppEnvironmentStorageTimeouts</a>

---



