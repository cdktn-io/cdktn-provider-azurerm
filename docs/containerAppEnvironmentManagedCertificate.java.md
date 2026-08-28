# `containerAppEnvironmentManagedCertificate` Submodule <a name="`containerAppEnvironmentManagedCertificate` Submodule" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAppEnvironmentManagedCertificate <a name="ContainerAppEnvironmentManagedCertificate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate azurerm_container_app_environment_managed_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificate;

ContainerAppEnvironmentManagedCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
    .subjectName(java.lang.String)
//  .domainControlValidation(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerAppEnvironmentManagedCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The Container App Managed Environment ID to configure this Managed Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Container Apps Managed Certificate. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.subjectName">subjectName</a></code> | <code>java.lang.String</code> | The Subject Name of the Certificate. Must be a valid domain name. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.domainControlValidation">domainControlValidation</a></code> | <code>java.lang.String</code> | The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* java.lang.String

The Container App Managed Environment ID to configure this Managed Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#container_app_environment_id ContainerAppEnvironmentManagedCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Container Apps Managed Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#name ContainerAppEnvironmentManagedCertificate#name}

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.subjectName"></a>

- *Type:* java.lang.String

The Subject Name of the Certificate. Must be a valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#subject_name ContainerAppEnvironmentManagedCertificate#subject_name}

---

##### `domainControlValidation`<sup>Optional</sup> <a name="domainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.domainControlValidation"></a>

- *Type:* java.lang.String

The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#domain_control_validation ContainerAppEnvironmentManagedCertificate#domain_control_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#timeouts ContainerAppEnvironmentManagedCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation">resetDomainControlValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts"></a>

```java
public void putTimeouts(ContainerAppEnvironmentManagedCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---

##### `resetDomainControlValidation` <a name="resetDomainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetDomainControlValidation"></a>

```java
public void resetDomainControlValidation()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificate;

ContainerAppEnvironmentManagedCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificate;

ContainerAppEnvironmentManagedCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificate;

ContainerAppEnvironmentManagedCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificate;

ContainerAppEnvironmentManagedCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerAppEnvironmentManagedCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ContainerAppEnvironmentManagedCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerAppEnvironmentManagedCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerAppEnvironmentManagedCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ContainerAppEnvironmentManagedCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken">validationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput">containerAppEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput">domainControlValidationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput">subjectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation">domainControlValidation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName">subjectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeouts"></a>

```java
public ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference">ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference</a>

---

##### `validationToken`<sup>Required</sup> <a name="validationToken" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.validationToken"></a>

```java
public java.lang.String getValidationToken();
```

- *Type:* java.lang.String

---

##### `containerAppEnvironmentIdInput`<sup>Optional</sup> <a name="containerAppEnvironmentIdInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentIdInput"></a>

```java
public java.lang.String getContainerAppEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `domainControlValidationInput`<sup>Optional</sup> <a name="domainControlValidationInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidationInput"></a>

```java
public java.lang.String getDomainControlValidationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `subjectNameInput`<sup>Optional</sup> <a name="subjectNameInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectNameInput"></a>

```java
public java.lang.String getSubjectNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.timeoutsInput"></a>

```java
public IResolvable|ContainerAppEnvironmentManagedCertificateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

---

##### `domainControlValidation`<sup>Required</sup> <a name="domainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.domainControlValidation"></a>

```java
public java.lang.String getDomainControlValidation();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.subjectName"></a>

```java
public java.lang.String getSubjectName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppEnvironmentManagedCertificateConfig <a name="ContainerAppEnvironmentManagedCertificateConfig" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificateConfig;

ContainerAppEnvironmentManagedCertificateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .containerAppEnvironmentId(java.lang.String)
    .name(java.lang.String)
    .subjectName(java.lang.String)
//  .domainControlValidation(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ContainerAppEnvironmentManagedCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId">containerAppEnvironmentId</a></code> | <code>java.lang.String</code> | The Container App Managed Environment ID to configure this Managed Certificate on. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Container Apps Managed Certificate. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName">subjectName</a></code> | <code>java.lang.String</code> | The Subject Name of the Certificate. Must be a valid domain name. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation">domainControlValidation</a></code> | <code>java.lang.String</code> | The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `containerAppEnvironmentId`<sup>Required</sup> <a name="containerAppEnvironmentId" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.containerAppEnvironmentId"></a>

```java
public java.lang.String getContainerAppEnvironmentId();
```

- *Type:* java.lang.String

The Container App Managed Environment ID to configure this Managed Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#container_app_environment_id ContainerAppEnvironmentManagedCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Container Apps Managed Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#name ContainerAppEnvironmentManagedCertificate#name}

---

##### `subjectName`<sup>Required</sup> <a name="subjectName" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.subjectName"></a>

```java
public java.lang.String getSubjectName();
```

- *Type:* java.lang.String

The Subject Name of the Certificate. Must be a valid domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#subject_name ContainerAppEnvironmentManagedCertificate#subject_name}

---

##### `domainControlValidation`<sup>Optional</sup> <a name="domainControlValidation" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.domainControlValidation"></a>

```java
public java.lang.String getDomainControlValidation();
```

- *Type:* java.lang.String

The domain control validation type for the managed certificate. Possible values are `CNAME` and `HTTP`. Defaults to `HTTP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#domain_control_validation ContainerAppEnvironmentManagedCertificate#domain_control_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#id ContainerAppEnvironmentManagedCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#tags ContainerAppEnvironmentManagedCertificate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateConfig.property.timeouts"></a>

```java
public ContainerAppEnvironmentManagedCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#timeouts ContainerAppEnvironmentManagedCertificate#timeouts}

---

### ContainerAppEnvironmentManagedCertificateTimeouts <a name="ContainerAppEnvironmentManagedCertificateTimeouts" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificateTimeouts;

ContainerAppEnvironmentManagedCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#create ContainerAppEnvironmentManagedCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#delete ContainerAppEnvironmentManagedCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#read ContainerAppEnvironmentManagedCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/container_app_environment_managed_certificate#update ContainerAppEnvironmentManagedCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference <a name="ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.container_app_environment_managed_certificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference;

new ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ContainerAppEnvironmentManagedCertificateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.containerAppEnvironmentManagedCertificate.ContainerAppEnvironmentManagedCertificateTimeouts">ContainerAppEnvironmentManagedCertificateTimeouts</a>

---



