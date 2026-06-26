# `automationRuntimeEnvironment` Submodule <a name="`automationRuntimeEnvironment` Submodule" id="@cdktn/provider-azurerm.automationRuntimeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationRuntimeEnvironment <a name="AutomationRuntimeEnvironment" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment azurerm_automation_runtime_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironment;

AutomationRuntimeEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .automationAccountId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .runtimeLanguage(java.lang.String)
    .runtimeVersion(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .runtimeDefaultPackages(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomationRuntimeEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#automation_account_id AutomationRuntimeEnvironment#automation_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#location AutomationRuntimeEnvironment#location}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#name AutomationRuntimeEnvironment#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.runtimeLanguage">runtimeLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_language AutomationRuntimeEnvironment#runtime_language}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_version AutomationRuntimeEnvironment#runtime_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#description AutomationRuntimeEnvironment#description}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#id AutomationRuntimeEnvironment#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.runtimeDefaultPackages">runtimeDefaultPackages</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_default_packages AutomationRuntimeEnvironment#runtime_default_packages}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#tags AutomationRuntimeEnvironment#tags}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.automationAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#automation_account_id AutomationRuntimeEnvironment#automation_account_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#location AutomationRuntimeEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#name AutomationRuntimeEnvironment#name}.

---

##### `runtimeLanguage`<sup>Required</sup> <a name="runtimeLanguage" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.runtimeLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_language AutomationRuntimeEnvironment#runtime_language}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.runtimeVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_version AutomationRuntimeEnvironment#runtime_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#description AutomationRuntimeEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#id AutomationRuntimeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runtimeDefaultPackages`<sup>Optional</sup> <a name="runtimeDefaultPackages" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.runtimeDefaultPackages"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_default_packages AutomationRuntimeEnvironment#runtime_default_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#tags AutomationRuntimeEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#timeouts AutomationRuntimeEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetRuntimeDefaultPackages">resetRuntimeDefaultPackages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.putTimeouts"></a>

```java
public void putTimeouts(AutomationRuntimeEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetRuntimeDefaultPackages` <a name="resetRuntimeDefaultPackages" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetRuntimeDefaultPackages"></a>

```java
public void resetRuntimeDefaultPackages()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AutomationRuntimeEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironment;

AutomationRuntimeEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironment;

AutomationRuntimeEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironment;

AutomationRuntimeEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironment;

AutomationRuntimeEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutomationRuntimeEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AutomationRuntimeEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutomationRuntimeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutomationRuntimeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AutomationRuntimeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference">AutomationRuntimeEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.automationAccountIdInput">automationAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeDefaultPackagesInput">runtimeDefaultPackagesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeLanguageInput">runtimeLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeDefaultPackages">runtimeDefaultPackages</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeLanguage">runtimeLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.timeouts"></a>

```java
public AutomationRuntimeEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference">AutomationRuntimeEnvironmentTimeoutsOutputReference</a>

---

##### `automationAccountIdInput`<sup>Optional</sup> <a name="automationAccountIdInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.automationAccountIdInput"></a>

```java
public java.lang.String getAutomationAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `runtimeDefaultPackagesInput`<sup>Optional</sup> <a name="runtimeDefaultPackagesInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeDefaultPackagesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeDefaultPackagesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeLanguageInput`<sup>Optional</sup> <a name="runtimeLanguageInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeLanguageInput"></a>

```java
public java.lang.String getRuntimeLanguageInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.timeoutsInput"></a>

```java
public IResolvable|AutomationRuntimeEnvironmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.automationAccountId"></a>

```java
public java.lang.String getAutomationAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `runtimeDefaultPackages`<sup>Required</sup> <a name="runtimeDefaultPackages" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeDefaultPackages"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeDefaultPackages();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeLanguage`<sup>Required</sup> <a name="runtimeLanguage" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeLanguage"></a>

```java
public java.lang.String getRuntimeLanguage();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationRuntimeEnvironmentConfig <a name="AutomationRuntimeEnvironmentConfig" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironmentConfig;

AutomationRuntimeEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .automationAccountId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .runtimeLanguage(java.lang.String)
    .runtimeVersion(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .runtimeDefaultPackages(java.util.Map<java.lang.String, java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AutomationRuntimeEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.automationAccountId">automationAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#automation_account_id AutomationRuntimeEnvironment#automation_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#location AutomationRuntimeEnvironment#location}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#name AutomationRuntimeEnvironment#name}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.runtimeLanguage">runtimeLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_language AutomationRuntimeEnvironment#runtime_language}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_version AutomationRuntimeEnvironment#runtime_version}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#description AutomationRuntimeEnvironment#description}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#id AutomationRuntimeEnvironment#id}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.runtimeDefaultPackages">runtimeDefaultPackages</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_default_packages AutomationRuntimeEnvironment#runtime_default_packages}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#tags AutomationRuntimeEnvironment#tags}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automationAccountId`<sup>Required</sup> <a name="automationAccountId" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.automationAccountId"></a>

```java
public java.lang.String getAutomationAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#automation_account_id AutomationRuntimeEnvironment#automation_account_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#location AutomationRuntimeEnvironment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#name AutomationRuntimeEnvironment#name}.

---

##### `runtimeLanguage`<sup>Required</sup> <a name="runtimeLanguage" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.runtimeLanguage"></a>

```java
public java.lang.String getRuntimeLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_language AutomationRuntimeEnvironment#runtime_language}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_version AutomationRuntimeEnvironment#runtime_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#description AutomationRuntimeEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#id AutomationRuntimeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runtimeDefaultPackages`<sup>Optional</sup> <a name="runtimeDefaultPackages" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.runtimeDefaultPackages"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRuntimeDefaultPackages();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#runtime_default_packages AutomationRuntimeEnvironment#runtime_default_packages}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#tags AutomationRuntimeEnvironment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentConfig.property.timeouts"></a>

```java
public AutomationRuntimeEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#timeouts AutomationRuntimeEnvironment#timeouts}

---

### AutomationRuntimeEnvironmentTimeouts <a name="AutomationRuntimeEnvironmentTimeouts" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironmentTimeouts;

AutomationRuntimeEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#create AutomationRuntimeEnvironment#create}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#delete AutomationRuntimeEnvironment#delete}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#read AutomationRuntimeEnvironment#read}. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#update AutomationRuntimeEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#create AutomationRuntimeEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#delete AutomationRuntimeEnvironment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#read AutomationRuntimeEnvironment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/automation_runtime_environment#update AutomationRuntimeEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationRuntimeEnvironmentTimeoutsOutputReference <a name="AutomationRuntimeEnvironmentTimeoutsOutputReference" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.automation_runtime_environment.AutomationRuntimeEnvironmentTimeoutsOutputReference;

new AutomationRuntimeEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AutomationRuntimeEnvironmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.automationRuntimeEnvironment.AutomationRuntimeEnvironmentTimeouts">AutomationRuntimeEnvironmentTimeouts</a>

---



