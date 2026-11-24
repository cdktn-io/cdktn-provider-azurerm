# `dataProtectionBackupVaultResourceGuardAssociation` Submodule <a name="`dataProtectionBackupVaultResourceGuardAssociation` Submodule" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupVaultResourceGuardAssociation <a name="DataProtectionBackupVaultResourceGuardAssociation" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association azurerm_data_protection_backup_vault_resource_guard_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociation;

DataProtectionBackupVaultResourceGuardAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataProtectionBackupVaultId(java.lang.String)
    .dataProtectionResourceGuardId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataProtectionBackupVaultResourceGuardAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_backup_vault_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.dataProtectionResourceGuardId">dataProtectionResourceGuardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_resource_guard_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_resource_guard_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#id DataProtectionBackupVaultResourceGuardAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.dataProtectionBackupVaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_backup_vault_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_backup_vault_id}.

---

##### `dataProtectionResourceGuardId`<sup>Required</sup> <a name="dataProtectionResourceGuardId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.dataProtectionResourceGuardId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_resource_guard_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_resource_guard_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#id DataProtectionBackupVaultResourceGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#timeouts DataProtectionBackupVaultResourceGuardAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.putTimeouts"></a>

```java
public void putTimeouts(DataProtectionBackupVaultResourceGuardAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataProtectionBackupVaultResourceGuardAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociation;

DataProtectionBackupVaultResourceGuardAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociation;

DataProtectionBackupVaultResourceGuardAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociation;

DataProtectionBackupVaultResourceGuardAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociation;

DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataProtectionBackupVaultResourceGuardAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataProtectionBackupVaultResourceGuardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataProtectionBackupVaultResourceGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupVaultResourceGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference">DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionBackupVaultIdInput">dataProtectionBackupVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionResourceGuardIdInput">dataProtectionResourceGuardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionResourceGuardId">dataProtectionResourceGuardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.timeouts"></a>

```java
public DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference">DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference</a>

---

##### `dataProtectionBackupVaultIdInput`<sup>Optional</sup> <a name="dataProtectionBackupVaultIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionBackupVaultIdInput"></a>

```java
public java.lang.String getDataProtectionBackupVaultIdInput();
```

- *Type:* java.lang.String

---

##### `dataProtectionResourceGuardIdInput`<sup>Optional</sup> <a name="dataProtectionResourceGuardIdInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionResourceGuardIdInput"></a>

```java
public java.lang.String getDataProtectionResourceGuardIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.timeoutsInput"></a>

```java
public IResolvable|DataProtectionBackupVaultResourceGuardAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a>

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionBackupVaultId"></a>

```java
public java.lang.String getDataProtectionBackupVaultId();
```

- *Type:* java.lang.String

---

##### `dataProtectionResourceGuardId`<sup>Required</sup> <a name="dataProtectionResourceGuardId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.dataProtectionResourceGuardId"></a>

```java
public java.lang.String getDataProtectionResourceGuardId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupVaultResourceGuardAssociationConfig <a name="DataProtectionBackupVaultResourceGuardAssociationConfig" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociationConfig;

DataProtectionBackupVaultResourceGuardAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataProtectionBackupVaultId(java.lang.String)
    .dataProtectionResourceGuardId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataProtectionBackupVaultResourceGuardAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.dataProtectionBackupVaultId">dataProtectionBackupVaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_backup_vault_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_backup_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.dataProtectionResourceGuardId">dataProtectionResourceGuardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_resource_guard_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_resource_guard_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#id DataProtectionBackupVaultResourceGuardAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataProtectionBackupVaultId`<sup>Required</sup> <a name="dataProtectionBackupVaultId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.dataProtectionBackupVaultId"></a>

```java
public java.lang.String getDataProtectionBackupVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_backup_vault_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_backup_vault_id}.

---

##### `dataProtectionResourceGuardId`<sup>Required</sup> <a name="dataProtectionResourceGuardId" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.dataProtectionResourceGuardId"></a>

```java
public java.lang.String getDataProtectionResourceGuardId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#data_protection_resource_guard_id DataProtectionBackupVaultResourceGuardAssociation#data_protection_resource_guard_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#id DataProtectionBackupVaultResourceGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationConfig.property.timeouts"></a>

```java
public DataProtectionBackupVaultResourceGuardAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#timeouts DataProtectionBackupVaultResourceGuardAssociation#timeouts}

---

### DataProtectionBackupVaultResourceGuardAssociationTimeouts <a name="DataProtectionBackupVaultResourceGuardAssociationTimeouts" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociationTimeouts;

DataProtectionBackupVaultResourceGuardAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#create DataProtectionBackupVaultResourceGuardAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#delete DataProtectionBackupVaultResourceGuardAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#read DataProtectionBackupVaultResourceGuardAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#create DataProtectionBackupVaultResourceGuardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#delete DataProtectionBackupVaultResourceGuardAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/data_protection_backup_vault_resource_guard_association#read DataProtectionBackupVaultResourceGuardAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference <a name="DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.data_protection_backup_vault_resource_guard_association.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference;

new DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataProtectionBackupVaultResourceGuardAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.dataProtectionBackupVaultResourceGuardAssociation.DataProtectionBackupVaultResourceGuardAssociationTimeouts">DataProtectionBackupVaultResourceGuardAssociationTimeouts</a>

---



