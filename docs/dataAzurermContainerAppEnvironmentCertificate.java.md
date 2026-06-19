# `dataAzurermContainerAppEnvironmentCertificate` Submodule <a name="`dataAzurermContainerAppEnvironmentCertificate` Submodule" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerAppEnvironmentCertificate <a name="DataAzurermContainerAppEnvironmentCertificate" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate azurerm_container_app_environment_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificate;

DataAzurermContainerAppEnvironmentCertificate.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermContainerAppEnvironmentCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The Container App Managed Environment ID to configure this Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Container Apps Certificate. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* java.lang.String

The Container App Managed Environment ID to configure this Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#container_app_environment_id DataAzurermContainerAppEnvironmentCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Container Apps Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#name DataAzurermContainerAppEnvironmentCertificate#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#timeouts DataAzurermContainerAppEnvironmentCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermContainerAppEnvironmentCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificate;

DataAzurermContainerAppEnvironmentCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificate;

DataAzurermContainerAppEnvironmentCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificate;

DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificate;

DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAzurermContainerAppEnvironmentCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermContainerAppEnvironmentCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermContainerAppEnvironmentCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerAppEnvironmentCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.expirationDate">expirationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issueDate">issueDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.subjectName">subjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference">DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.expirationDate"></a>

```java
public java.lang.String getExpirationDate();
```

- *Type:* java.lang.String

---

##### `issueDate`<sup>Required</sup> <a name="issueDate" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issueDate"></a>

```java
public java.lang.String getIssueDate();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.subjectName"></a>

```java
public java.lang.String getSubjectName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeouts"></a>

```java
public DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference">DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference</a>

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput"></a>

```java
public java.lang.String getContainerAppEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeoutsInput"></a>

```java
public IResolvable|DataAzurermContainerAppEnvironmentCertificateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerAppEnvironmentCertificateConfig <a name="DataAzurermContainerAppEnvironmentCertificateConfig" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificateConfig;

DataAzurermContainerAppEnvironmentCertificateConfig.builder()
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
//  .timeouts(DataAzurermContainerAppEnvironmentCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The Container App Managed Environment ID to configure this Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Container Apps Certificate. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

The Container App Managed Environment ID to configure this Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#container_app_environment_id DataAzurermContainerAppEnvironmentCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Container Apps Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#name DataAzurermContainerAppEnvironmentCertificate#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.timeouts"></a>

```java
public DataAzurermContainerAppEnvironmentCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#timeouts DataAzurermContainerAppEnvironmentCertificate#timeouts}

---

### DataAzurermContainerAppEnvironmentCertificateTimeouts <a name="DataAzurermContainerAppEnvironmentCertificateTimeouts" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificateTimeouts;

DataAzurermContainerAppEnvironmentCertificateTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference <a name="DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_azurerm_container_app_environment_certificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference;

new DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAzurermContainerAppEnvironmentCertificateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

---



