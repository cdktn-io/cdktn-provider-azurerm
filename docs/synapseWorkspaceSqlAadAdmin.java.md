# `synapseWorkspaceSqlAadAdmin` Submodule <a name="`synapseWorkspaceSqlAadAdmin` Submodule" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceSqlAadAdmin <a name="SynapseWorkspaceSqlAadAdmin" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin azurerm_synapse_workspace_sql_aad_admin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdmin;

SynapseWorkspaceSqlAadAdmin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .login(java.lang.String)
    .objectId(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SynapseWorkspaceSqlAadAdminTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.login"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.objectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.synapseWorkspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#timeouts SynapseWorkspaceSqlAadAdmin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts"></a>

```java
public void putTimeouts(SynapseWorkspaceSqlAadAdminTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SynapseWorkspaceSqlAadAdmin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdmin;

SynapseWorkspaceSqlAadAdmin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdmin;

SynapseWorkspaceSqlAadAdmin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdmin;

SynapseWorkspaceSqlAadAdmin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdmin;

SynapseWorkspaceSqlAadAdmin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SynapseWorkspaceSqlAadAdmin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SynapseWorkspaceSqlAadAdmin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SynapseWorkspaceSqlAadAdmin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SynapseWorkspaceSqlAadAdmin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceSqlAadAdmin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference">SynapseWorkspaceSqlAadAdminTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.loginInput">loginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectIdInput">objectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.login">login</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeouts"></a>

```java
public SynapseWorkspaceSqlAadAdminTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference">SynapseWorkspaceSqlAadAdminTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.loginInput"></a>

```java
public java.lang.String getLoginInput();
```

- *Type:* java.lang.String

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectIdInput"></a>

```java
public java.lang.String getObjectIdInput();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceIdInput"></a>

```java
public java.lang.String getSynapseWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.timeoutsInput"></a>

```java
public IResolvable|SynapseWorkspaceSqlAadAdminTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdmin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceSqlAadAdminConfig <a name="SynapseWorkspaceSqlAadAdminConfig" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdminConfig;

SynapseWorkspaceSqlAadAdminConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .login(java.lang.String)
    .objectId(java.lang.String)
    .synapseWorkspaceId(java.lang.String)
    .tenantId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(SynapseWorkspaceSqlAadAdminTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.login">login</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.objectId">objectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.login"></a>

```java
public java.lang.String getLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#login SynapseWorkspaceSqlAadAdmin#login}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#object_id SynapseWorkspaceSqlAadAdmin#object_id}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.synapseWorkspaceId"></a>

```java
public java.lang.String getSynapseWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#synapse_workspace_id SynapseWorkspaceSqlAadAdmin#synapse_workspace_id}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#tenant_id SynapseWorkspaceSqlAadAdmin#tenant_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#id SynapseWorkspaceSqlAadAdmin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminConfig.property.timeouts"></a>

```java
public SynapseWorkspaceSqlAadAdminTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#timeouts SynapseWorkspaceSqlAadAdmin#timeouts}

---

### SynapseWorkspaceSqlAadAdminTimeouts <a name="SynapseWorkspaceSqlAadAdminTimeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdminTimeouts;

SynapseWorkspaceSqlAadAdminTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdmin#create}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdmin#delete}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdmin#read}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdmin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#create SynapseWorkspaceSqlAadAdmin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#delete SynapseWorkspaceSqlAadAdmin#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#read SynapseWorkspaceSqlAadAdmin#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/synapse_workspace_sql_aad_admin#update SynapseWorkspaceSqlAadAdmin#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceSqlAadAdminTimeoutsOutputReference <a name="SynapseWorkspaceSqlAadAdminTimeoutsOutputReference" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.synapse_workspace_sql_aad_admin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference;

new SynapseWorkspaceSqlAadAdminTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SynapseWorkspaceSqlAadAdminTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.synapseWorkspaceSqlAadAdmin.SynapseWorkspaceSqlAadAdminTimeouts">SynapseWorkspaceSqlAadAdminTimeouts</a>

---



