# `appServiceSourceControl` Submodule <a name="`appServiceSourceControl` Submodule" id="@cdktn/provider-azurerm.appServiceSourceControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSourceControl <a name="AppServiceSourceControl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control azurerm_app_service_source_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControl;

AppServiceSourceControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
//  .branch(java.lang.String)
//  .githubActionConfiguration(AppServiceSourceControlGithubActionConfiguration)
//  .id(java.lang.String)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(AppServiceSourceControlTimeouts)
//  .useLocalGit(java.lang.Boolean|IResolvable)
//  .useManualIntegration(java.lang.Boolean|IResolvable)
//  .useMercurial(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.branch">branch</a></code> | <code>java.lang.String</code> | The branch name to use for deployments. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#id AppServiceSourceControl#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | The URL for the repository. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#app_id AppServiceSourceControl#app_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.branch"></a>

- *Type:* java.lang.String

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#branch AppServiceSourceControl#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.githubActionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControl#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#id AppServiceSourceControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.repoUrl"></a>

- *Type:* java.lang.String

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControl#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.rollbackEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControl#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControl#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.useLocalGit"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControl#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.useManualIntegration"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControl#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.Initializer.parameter.useMercurial"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControl#use_mercurial}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.putGithubActionConfiguration">putGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetGithubActionConfiguration">resetGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetRepoUrl">resetRepoUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetUseLocalGit">resetUseLocalGit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetUseManualIntegration">resetUseManualIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetUseMercurial">resetUseMercurial</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGithubActionConfiguration` <a name="putGithubActionConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.putGithubActionConfiguration"></a>

```java
public void putGithubActionConfiguration(AppServiceSourceControlGithubActionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.putGithubActionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.putTimeouts"></a>

```java
public void putTimeouts(AppServiceSourceControlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetGithubActionConfiguration` <a name="resetGithubActionConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetGithubActionConfiguration"></a>

```java
public void resetGithubActionConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetId"></a>

```java
public void resetId()
```

##### `resetRepoUrl` <a name="resetRepoUrl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetRepoUrl"></a>

```java
public void resetRepoUrl()
```

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetRollbackEnabled"></a>

```java
public void resetRollbackEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseLocalGit` <a name="resetUseLocalGit" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetUseLocalGit"></a>

```java
public void resetUseLocalGit()
```

##### `resetUseManualIntegration` <a name="resetUseManualIntegration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetUseManualIntegration"></a>

```java
public void resetUseManualIntegration()
```

##### `resetUseMercurial` <a name="resetUseMercurial" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.resetUseMercurial"></a>

```java
public void resetUseMercurial()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppServiceSourceControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControl;

AppServiceSourceControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControl;

AppServiceSourceControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControl;

AppServiceSourceControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControl;

AppServiceSourceControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppServiceSourceControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppServiceSourceControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppServiceSourceControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppServiceSourceControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppServiceSourceControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.scmType">scmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.usesGithubAction">usesGithubAction</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.githubActionConfigurationInput">githubActionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.repoUrlInput">repoUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useLocalGitInput">useLocalGitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useManualIntegrationInput">useManualIntegrationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useMercurialInput">useMercurialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `githubActionConfiguration`<sup>Required</sup> <a name="githubActionConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.githubActionConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationOutputReference getGithubActionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationOutputReference</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.scmType"></a>

```java
public java.lang.String getScmType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.timeouts"></a>

```java
public AppServiceSourceControlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference">AppServiceSourceControlTimeoutsOutputReference</a>

---

##### `usesGithubAction`<sup>Required</sup> <a name="usesGithubAction" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.usesGithubAction"></a>

```java
public IResolvable getUsesGithubAction();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `githubActionConfigurationInput`<sup>Optional</sup> <a name="githubActionConfigurationInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.githubActionConfigurationInput"></a>

```java
public AppServiceSourceControlGithubActionConfiguration getGithubActionConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repoUrlInput`<sup>Optional</sup> <a name="repoUrlInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.repoUrlInput"></a>

```java
public java.lang.String getRepoUrlInput();
```

- *Type:* java.lang.String

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.rollbackEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRollbackEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.timeoutsInput"></a>

```java
public IResolvable|AppServiceSourceControlTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---

##### `useLocalGitInput`<sup>Optional</sup> <a name="useLocalGitInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useLocalGitInput"></a>

```java
public java.lang.Boolean|IResolvable getUseLocalGitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useManualIntegrationInput`<sup>Optional</sup> <a name="useManualIntegrationInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useManualIntegrationInput"></a>

```java
public java.lang.Boolean|IResolvable getUseManualIntegrationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useMercurialInput`<sup>Optional</sup> <a name="useMercurialInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useMercurialInput"></a>

```java
public java.lang.Boolean|IResolvable getUseMercurialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.rollbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRollbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useLocalGit`<sup>Required</sup> <a name="useLocalGit" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useLocalGit"></a>

```java
public java.lang.Boolean|IResolvable getUseLocalGit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useManualIntegration`<sup>Required</sup> <a name="useManualIntegration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useManualIntegration"></a>

```java
public java.lang.Boolean|IResolvable getUseManualIntegration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.useMercurial"></a>

```java
public java.lang.Boolean|IResolvable getUseMercurial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSourceControlConfig <a name="AppServiceSourceControlConfig" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlConfig;

AppServiceSourceControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
//  .branch(java.lang.String)
//  .githubActionConfiguration(AppServiceSourceControlGithubActionConfiguration)
//  .id(java.lang.String)
//  .repoUrl(java.lang.String)
//  .rollbackEnabled(java.lang.Boolean|IResolvable)
//  .timeouts(AppServiceSourceControlTimeouts)
//  .useLocalGit(java.lang.Boolean|IResolvable)
//  .useManualIntegration(java.lang.Boolean|IResolvable)
//  .useMercurial(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of the Windows or Linux Web App. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.branch">branch</a></code> | <code>java.lang.String</code> | The branch name to use for deployments. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.githubActionConfiguration">githubActionConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | github_action_configuration block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#id AppServiceSourceControl#id}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.repoUrl">repoUrl</a></code> | <code>java.lang.String</code> | The URL for the repository. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the Deployment Rollback be enabled? Defaults to `false`. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.useLocalGit">useLocalGit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the App use local Git configuration. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.useManualIntegration">useManualIntegration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should code be deployed manually. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.useMercurial">useMercurial</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The repository specified is Mercurial. Defaults to `false`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of the Windows or Linux Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#app_id AppServiceSourceControl#app_id}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The branch name to use for deployments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#branch AppServiceSourceControl#branch}

---

##### `githubActionConfiguration`<sup>Optional</sup> <a name="githubActionConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.githubActionConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfiguration getGithubActionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

github_action_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#github_action_configuration AppServiceSourceControl#github_action_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#id AppServiceSourceControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repoUrl`<sup>Optional</sup> <a name="repoUrl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.repoUrl"></a>

```java
public java.lang.String getRepoUrl();
```

- *Type:* java.lang.String

The URL for the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#repo_url AppServiceSourceControl#repo_url}

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.rollbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRollbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the Deployment Rollback be enabled? Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#rollback_enabled AppServiceSourceControl#rollback_enabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.timeouts"></a>

```java
public AppServiceSourceControlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#timeouts AppServiceSourceControl#timeouts}

---

##### `useLocalGit`<sup>Optional</sup> <a name="useLocalGit" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.useLocalGit"></a>

```java
public java.lang.Boolean|IResolvable getUseLocalGit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the App use local Git configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#use_local_git AppServiceSourceControl#use_local_git}

---

##### `useManualIntegration`<sup>Optional</sup> <a name="useManualIntegration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.useManualIntegration"></a>

```java
public java.lang.Boolean|IResolvable getUseManualIntegration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should code be deployed manually.

Set to `false` to enable continuous integration, such as webhooks into online repos such as GitHub. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#use_manual_integration AppServiceSourceControl#use_manual_integration}

---

##### `useMercurial`<sup>Optional</sup> <a name="useMercurial" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlConfig.property.useMercurial"></a>

```java
public java.lang.Boolean|IResolvable getUseMercurial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The repository specified is Mercurial. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#use_mercurial AppServiceSourceControl#use_mercurial}

---

### AppServiceSourceControlGithubActionConfiguration <a name="AppServiceSourceControlGithubActionConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfiguration;

AppServiceSourceControlGithubActionConfiguration.builder()
//  .codeConfiguration(AppServiceSourceControlGithubActionConfigurationCodeConfiguration)
//  .containerConfiguration(AppServiceSourceControlGithubActionConfigurationContainerConfiguration)
//  .generateWorkflowFile(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | code_configuration block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | container_configuration block. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Should the service generate the GitHub Action Workflow file. Defaults to `true`. |

---

##### `codeConfiguration`<sup>Optional</sup> <a name="codeConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.codeConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration getCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

code_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#code_configuration AppServiceSourceControl#code_configuration}

---

##### `containerConfiguration`<sup>Optional</sup> <a name="containerConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.containerConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration getContainerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

container_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#container_configuration AppServiceSourceControl#container_configuration}

---

##### `generateWorkflowFile`<sup>Optional</sup> <a name="generateWorkflowFile" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration.property.generateWorkflowFile"></a>

```java
public java.lang.Boolean|IResolvable getGenerateWorkflowFile();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Should the service generate the GitHub Action Workflow file. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#generate_workflow_file AppServiceSourceControl#generate_workflow_file}

---

### AppServiceSourceControlGithubActionConfigurationCodeConfiguration <a name="AppServiceSourceControlGithubActionConfigurationCodeConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationCodeConfiguration;

AppServiceSourceControlGithubActionConfigurationCodeConfiguration.builder()
    .runtimeStack(java.lang.String)
    .runtimeVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack">runtimeStack</a></code> | <code>java.lang.String</code> | The value to use for the Runtime Stack in the workflow file content for code base apps. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The value to use for the Runtime Version in the workflow file content for code base apps. |

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeStack"></a>

```java
public java.lang.String getRuntimeStack();
```

- *Type:* java.lang.String

The value to use for the Runtime Stack in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#runtime_stack AppServiceSourceControl#runtime_stack}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

The value to use for the Runtime Version in the workflow file content for code base apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#runtime_version AppServiceSourceControl#runtime_version}

---

### AppServiceSourceControlGithubActionConfigurationContainerConfiguration <a name="AppServiceSourceControlGithubActionConfigurationContainerConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationContainerConfiguration;

AppServiceSourceControlGithubActionConfigurationContainerConfiguration.builder()
    .imageName(java.lang.String)
    .registryUrl(java.lang.String)
//  .registryPassword(java.lang.String)
//  .registryUsername(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName">imageName</a></code> | <code>java.lang.String</code> | The image name for the build. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | The server URL for the container registry where the build will be hosted. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | The password used to upload the image to the container registry. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername">registryUsername</a></code> | <code>java.lang.String</code> | The username used to upload the image to the container registry. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

The image name for the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#image_name AppServiceSourceControl#image_name}

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

The server URL for the container registry where the build will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#registry_url AppServiceSourceControl#registry_url}

---

##### `registryPassword`<sup>Optional</sup> <a name="registryPassword" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

The password used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#registry_password AppServiceSourceControl#registry_password}

---

##### `registryUsername`<sup>Optional</sup> <a name="registryUsername" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration.property.registryUsername"></a>

```java
public java.lang.String getRegistryUsername();
```

- *Type:* java.lang.String

The username used to upload the image to the container registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#registry_username AppServiceSourceControl#registry_username}

---

### AppServiceSourceControlTimeouts <a name="AppServiceSourceControlTimeouts" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlTimeouts;

AppServiceSourceControlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#create AppServiceSourceControl#create}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#delete AppServiceSourceControl#delete}. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#read AppServiceSourceControl#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#create AppServiceSourceControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#delete AppServiceSourceControl#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/app_service_source_control#read AppServiceSourceControl#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference;

new AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput">runtimeStackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack">runtimeStack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `runtimeStackInput`<sup>Optional</sup> <a name="runtimeStackInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStackInput"></a>

```java
public java.lang.String getRuntimeStackInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `runtimeStack`<sup>Required</sup> <a name="runtimeStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeStack"></a>

```java
public java.lang.String getRuntimeStack();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference;

new AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword">resetRegistryPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername">resetRegistryUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryPassword` <a name="resetRegistryPassword" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryPassword"></a>

```java
public void resetRegistryPassword()
```

##### `resetRegistryUsername` <a name="resetRegistryUsername" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.resetRegistryUsername"></a>

```java
public void resetRegistryUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput">registryPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput">registryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput">registryUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword">registryPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl">registryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername">registryUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `registryPasswordInput`<sup>Optional</sup> <a name="registryPasswordInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPasswordInput"></a>

```java
public java.lang.String getRegistryPasswordInput();
```

- *Type:* java.lang.String

---

##### `registryUrlInput`<sup>Optional</sup> <a name="registryUrlInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrlInput"></a>

```java
public java.lang.String getRegistryUrlInput();
```

- *Type:* java.lang.String

---

##### `registryUsernameInput`<sup>Optional</sup> <a name="registryUsernameInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsernameInput"></a>

```java
public java.lang.String getRegistryUsernameInput();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `registryPassword`<sup>Required</sup> <a name="registryPassword" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryPassword"></a>

```java
public java.lang.String getRegistryPassword();
```

- *Type:* java.lang.String

---

##### `registryUrl`<sup>Required</sup> <a name="registryUrl" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUrl"></a>

```java
public java.lang.String getRegistryUrl();
```

- *Type:* java.lang.String

---

##### `registryUsername`<sup>Required</sup> <a name="registryUsername" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.registryUsername"></a>

```java
public java.lang.String getRegistryUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---


### AppServiceSourceControlGithubActionConfigurationOutputReference <a name="AppServiceSourceControlGithubActionConfigurationOutputReference" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlGithubActionConfigurationOutputReference;

new AppServiceSourceControlGithubActionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration">putCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration">putContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration">resetCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration">resetContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile">resetGenerateWorkflowFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeConfiguration` <a name="putCodeConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration"></a>

```java
public void putCodeConfiguration(AppServiceSourceControlGithubActionConfigurationCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `putContainerConfiguration` <a name="putContainerConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration"></a>

```java
public void putContainerConfiguration(AppServiceSourceControlGithubActionConfigurationContainerConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.putContainerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `resetCodeConfiguration` <a name="resetCodeConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetCodeConfiguration"></a>

```java
public void resetCodeConfiguration()
```

##### `resetContainerConfiguration` <a name="resetContainerConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetContainerConfiguration"></a>

```java
public void resetContainerConfiguration()
```

##### `resetGenerateWorkflowFile` <a name="resetGenerateWorkflowFile" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.resetGenerateWorkflowFile"></a>

```java
public void resetGenerateWorkflowFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration">codeConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration">containerConfiguration</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction">linuxAction</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput">codeConfigurationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput">containerConfigurationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput">generateWorkflowFileInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile">generateWorkflowFile</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeConfiguration`<sup>Required</sup> <a name="codeConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference getCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationCodeConfigurationOutputReference</a>

---

##### `containerConfiguration`<sup>Required</sup> <a name="containerConfiguration" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfiguration"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference getContainerConfiguration();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference">AppServiceSourceControlGithubActionConfigurationContainerConfigurationOutputReference</a>

---

##### `linuxAction`<sup>Required</sup> <a name="linuxAction" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.linuxAction"></a>

```java
public IResolvable getLinuxAction();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `codeConfigurationInput`<sup>Optional</sup> <a name="codeConfigurationInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.codeConfigurationInput"></a>

```java
public AppServiceSourceControlGithubActionConfigurationCodeConfiguration getCodeConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationCodeConfiguration">AppServiceSourceControlGithubActionConfigurationCodeConfiguration</a>

---

##### `containerConfigurationInput`<sup>Optional</sup> <a name="containerConfigurationInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.containerConfigurationInput"></a>

```java
public AppServiceSourceControlGithubActionConfigurationContainerConfiguration getContainerConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationContainerConfiguration">AppServiceSourceControlGithubActionConfigurationContainerConfiguration</a>

---

##### `generateWorkflowFileInput`<sup>Optional</sup> <a name="generateWorkflowFileInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFileInput"></a>

```java
public java.lang.Boolean|IResolvable getGenerateWorkflowFileInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generateWorkflowFile`<sup>Required</sup> <a name="generateWorkflowFile" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.generateWorkflowFile"></a>

```java
public java.lang.Boolean|IResolvable getGenerateWorkflowFile();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfigurationOutputReference.property.internalValue"></a>

```java
public AppServiceSourceControlGithubActionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlGithubActionConfiguration">AppServiceSourceControlGithubActionConfiguration</a>

---


### AppServiceSourceControlTimeoutsOutputReference <a name="AppServiceSourceControlTimeoutsOutputReference" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.app_service_source_control.AppServiceSourceControlTimeoutsOutputReference;

new AppServiceSourceControlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppServiceSourceControlTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.appServiceSourceControl.AppServiceSourceControlTimeouts">AppServiceSourceControlTimeouts</a>

---



