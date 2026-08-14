# `keyVaultManagedHardwareSecurityModuleRoleAssignment` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleAssignment` Submodule" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignment <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignment" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment azurerm_key_vault_managed_hardware_security_module_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managedHsmId(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.managedHsmId">managedHsmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.managedHsmId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}.

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#timeouts KeyVaultManagedHardwareSecurityModuleRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts"></a>

```java
public void putTimeouts(KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KeyVaultManagedHardwareSecurityModuleRoleAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment;

KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KeyVaultManagedHardwareSecurityModuleRoleAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmIdInput">managedHsmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmId">managedHsmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeouts"></a>

```java
public KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedHsmIdInput`<sup>Optional</sup> <a name="managedHsmIdInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmIdInput"></a>

```java
public java.lang.String getManagedHsmIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionIdInput"></a>

```java
public java.lang.String getRoleDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.timeoutsInput"></a>

```java
public IResolvable|KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.managedHsmId"></a>

```java
public java.lang.String getManagedHsmId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig;

KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .managedHsmId(java.lang.String)
    .name(java.lang.String)
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
    .scope(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.managedHsmId">managedHsmId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `managedHsmId`<sup>Required</sup> <a name="managedHsmId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.managedHsmId"></a>

```java
public java.lang.String getManagedHsmId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#managed_hsm_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#managed_hsm_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#name KeyVaultManagedHardwareSecurityModuleRoleAssignment#name}.

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#principal_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#principal_id}.

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#role_definition_id KeyVaultManagedHardwareSecurityModuleRoleAssignment#role_definition_id}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#scope KeyVaultManagedHardwareSecurityModuleRoleAssignment#scope}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#id KeyVaultManagedHardwareSecurityModuleRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentConfig.property.timeouts"></a>

```java
public KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#timeouts KeyVaultManagedHardwareSecurityModuleRoleAssignment#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts;

KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#create KeyVaultManagedHardwareSecurityModuleRoleAssignment#create}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#delete KeyVaultManagedHardwareSecurityModuleRoleAssignment#delete}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#read KeyVaultManagedHardwareSecurityModuleRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#create KeyVaultManagedHardwareSecurityModuleRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#delete KeyVaultManagedHardwareSecurityModuleRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/key_vault_managed_hardware_security_module_role_assignment#read KeyVaultManagedHardwareSecurityModuleRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.key_vault_managed_hardware_security_module_role_assignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference;

new KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleAssignment.KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts">KeyVaultManagedHardwareSecurityModuleRoleAssignmentTimeouts</a>

---



