# `automationRuntimeEnvironmentPackage` Submodule <a name="`automationRuntimeEnvironmentPackage` Submodule" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuntimeEnvironmentPackage <a name="AutomationRuntimeEnvironmentPackage" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package azurerm_automation_runtime_environment_package}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackage;

AutomationRuntimeEnvironmentPackage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .automationRuntimeEnvironmentId(java.lang.String)
    .contentUri(java.lang.String)
    .name(java.lang.String)
//  .contentVersion(java.lang.String)
//  .hashAlgorithm(java.lang.String)
//  .hashValue(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AutomationRuntimeEnvironmentPackageTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.automationRuntimeEnvironmentId">automationRuntimeEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentUri">contentUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentVersion">contentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashValue">hashValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automationRuntimeEnvironmentId`<sup>Required</sup> <a name="automationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.automationRuntimeEnvironmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}.

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}.

---

##### `contentVersion`<sup>Optional</sup> <a name="contentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.contentVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}.

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}.

---

##### `hashValue`<sup>Optional</sup> <a name="hashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.hashValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion">resetContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue">resetHashValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts"></a>

```java
public void putTimeouts(AutomationRuntimeEnvironmentPackageTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---

##### `resetContentVersion` <a name="resetContentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetContentVersion"></a>

```java
public void resetContentVersion()
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashAlgorithm"></a>

```java
public void resetHashAlgorithm()
```

##### `resetHashValue` <a name="resetHashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetHashValue"></a>

```java
public void resetHashValue()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackage;

AutomationRuntimeEnvironmentPackage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackage;

AutomationRuntimeEnvironmentPackage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackage;

AutomationRuntimeEnvironmentPackage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackage;

AutomationRuntimeEnvironmentPackage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutomationRuntimeEnvironmentPackage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutomationRuntimeEnvironmentPackage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutomationRuntimeEnvironmentPackage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutomationRuntimeEnvironmentPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutomationRuntimeEnvironmentPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default">default</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput">automationRuntimeEnvironmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput">contentUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput">contentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput">hashValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId">automationRuntimeEnvironmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri">contentUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion">contentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue">hashValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.default"></a>

```java
public IResolvable getDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.sizeInBytes"></a>

```java
public java.lang.Number getSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeouts"></a>

```java
public AutomationRuntimeEnvironmentPackageTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference">AutomationRuntimeEnvironmentPackageTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `automationRuntimeEnvironmentIdInput`<sup>Optional</sup> <a name="automationRuntimeEnvironmentIdInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentIdInput"></a>

```java
public java.lang.String getAutomationRuntimeEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `contentUriInput`<sup>Optional</sup> <a name="contentUriInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUriInput"></a>

```java
public java.lang.String getContentUriInput();
```

- *Type:* java.lang.String

---

##### `contentVersionInput`<sup>Optional</sup> <a name="contentVersionInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersionInput"></a>

```java
public java.lang.String getContentVersionInput();
```

- *Type:* java.lang.String

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithmInput"></a>

```java
public java.lang.String getHashAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `hashValueInput`<sup>Optional</sup> <a name="hashValueInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValueInput"></a>

```java
public java.lang.String getHashValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.timeoutsInput"></a>

```java
public IResolvable|AutomationRuntimeEnvironmentPackageTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---

##### `automationRuntimeEnvironmentId`<sup>Required</sup> <a name="automationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.automationRuntimeEnvironmentId"></a>

```java
public java.lang.String getAutomationRuntimeEnvironmentId();
```

- *Type:* java.lang.String

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentUri"></a>

```java
public java.lang.String getContentUri();
```

- *Type:* java.lang.String

---

##### `contentVersion`<sup>Required</sup> <a name="contentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.contentVersion"></a>

```java
public java.lang.String getContentVersion();
```

- *Type:* java.lang.String

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

---

##### `hashValue`<sup>Required</sup> <a name="hashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.hashValue"></a>

```java
public java.lang.String getHashValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuntimeEnvironmentPackageConfig <a name="AutomationRuntimeEnvironmentPackageConfig" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackageConfig;

AutomationRuntimeEnvironmentPackageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .automationRuntimeEnvironmentId(java.lang.String)
    .contentUri(java.lang.String)
    .name(java.lang.String)
//  .contentVersion(java.lang.String)
//  .hashAlgorithm(java.lang.String)
//  .hashValue(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(AutomationRuntimeEnvironmentPackageTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId">automationRuntimeEnvironmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri">contentUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion">contentVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue">hashValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automationRuntimeEnvironmentId`<sup>Required</sup> <a name="automationRuntimeEnvironmentId" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.automationRuntimeEnvironmentId"></a>

```java
public java.lang.String getAutomationRuntimeEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#automation_runtime_environment_id AutomationRuntimeEnvironmentPackage#automation_runtime_environment_id}.

---

##### `contentUri`<sup>Required</sup> <a name="contentUri" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentUri"></a>

```java
public java.lang.String getContentUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_uri AutomationRuntimeEnvironmentPackage#content_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#name AutomationRuntimeEnvironmentPackage#name}.

---

##### `contentVersion`<sup>Optional</sup> <a name="contentVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.contentVersion"></a>

```java
public java.lang.String getContentVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#content_version AutomationRuntimeEnvironmentPackage#content_version}.

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_algorithm AutomationRuntimeEnvironmentPackage#hash_algorithm}.

---

##### `hashValue`<sup>Optional</sup> <a name="hashValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.hashValue"></a>

```java
public java.lang.String getHashValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#hash_value AutomationRuntimeEnvironmentPackage#hash_value}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#id AutomationRuntimeEnvironmentPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageConfig.property.timeouts"></a>

```java
public AutomationRuntimeEnvironmentPackageTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#timeouts AutomationRuntimeEnvironmentPackage#timeouts}

---

### AutomationRuntimeEnvironmentPackageTimeouts <a name="AutomationRuntimeEnvironmentPackageTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackageTimeouts;

AutomationRuntimeEnvironmentPackageTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#create AutomationRuntimeEnvironmentPackage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#delete AutomationRuntimeEnvironmentPackage#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/automation_runtime_environment_package#read AutomationRuntimeEnvironmentPackage#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRuntimeEnvironmentPackageTimeoutsOutputReference <a name="AutomationRuntimeEnvironmentPackageTimeoutsOutputReference" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment_package.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference;

new AutomationRuntimeEnvironmentPackageTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutomationRuntimeEnvironmentPackageTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironmentPackage.AutomationRuntimeEnvironmentPackageTimeouts">AutomationRuntimeEnvironmentPackageTimeouts</a>

---



