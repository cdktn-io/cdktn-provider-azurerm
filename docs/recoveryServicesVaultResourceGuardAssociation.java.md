# `recoveryServicesVaultResourceGuardAssociation` Submodule <a name="`recoveryServicesVaultResourceGuardAssociation` Submodule" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryServicesVaultResourceGuardAssociation <a name="RecoveryServicesVaultResourceGuardAssociation" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association azurerm_recovery_services_vault_resource_guard_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociation;

RecoveryServicesVaultResourceGuardAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceGuardId(java.lang.String)
    .vaultId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(RecoveryServicesVaultResourceGuardAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.resourceGuardId">resourceGuardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceGuardId`<sup>Required</sup> <a name="resourceGuardId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.resourceGuardId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.vaultId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#timeouts RecoveryServicesVaultResourceGuardAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts"></a>

```java
public void putTimeouts(RecoveryServicesVaultResourceGuardAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RecoveryServicesVaultResourceGuardAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociation;

RecoveryServicesVaultResourceGuardAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociation;

RecoveryServicesVaultResourceGuardAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociation;

RecoveryServicesVaultResourceGuardAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociation;

RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RecoveryServicesVaultResourceGuardAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RecoveryServicesVaultResourceGuardAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RecoveryServicesVaultResourceGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RecoveryServicesVaultResourceGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference">RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardIdInput">resourceGuardIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultIdInput">vaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardId">resourceGuardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeouts"></a>

```java
public RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference">RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceGuardIdInput`<sup>Optional</sup> <a name="resourceGuardIdInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardIdInput"></a>

```java
public java.lang.String getResourceGuardIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.timeoutsInput"></a>

```java
public IResolvable|RecoveryServicesVaultResourceGuardAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultIdInput"></a>

```java
public java.lang.String getVaultIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceGuardId`<sup>Required</sup> <a name="resourceGuardId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.resourceGuardId"></a>

```java
public java.lang.String getResourceGuardId();
```

- *Type:* java.lang.String

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryServicesVaultResourceGuardAssociationConfig <a name="RecoveryServicesVaultResourceGuardAssociationConfig" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociationConfig;

RecoveryServicesVaultResourceGuardAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceGuardId(java.lang.String)
    .vaultId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(RecoveryServicesVaultResourceGuardAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.resourceGuardId">resourceGuardId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.vaultId">vaultId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceGuardId`<sup>Required</sup> <a name="resourceGuardId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.resourceGuardId"></a>

```java
public java.lang.String getResourceGuardId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#resource_guard_id RecoveryServicesVaultResourceGuardAssociation#resource_guard_id}.

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.vaultId"></a>

```java
public java.lang.String getVaultId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#vault_id RecoveryServicesVaultResourceGuardAssociation#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#id RecoveryServicesVaultResourceGuardAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationConfig.property.timeouts"></a>

```java
public RecoveryServicesVaultResourceGuardAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#timeouts RecoveryServicesVaultResourceGuardAssociation#timeouts}

---

### RecoveryServicesVaultResourceGuardAssociationTimeouts <a name="RecoveryServicesVaultResourceGuardAssociationTimeouts" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociationTimeouts;

RecoveryServicesVaultResourceGuardAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#create RecoveryServicesVaultResourceGuardAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#delete RecoveryServicesVaultResourceGuardAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#read RecoveryServicesVaultResourceGuardAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#create RecoveryServicesVaultResourceGuardAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#delete RecoveryServicesVaultResourceGuardAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/recovery_services_vault_resource_guard_association#read RecoveryServicesVaultResourceGuardAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference <a name="RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.recovery_services_vault_resource_guard_association.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference;

new RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|RecoveryServicesVaultResourceGuardAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.recoveryServicesVaultResourceGuardAssociation.RecoveryServicesVaultResourceGuardAssociationTimeouts">RecoveryServicesVaultResourceGuardAssociationTimeouts</a>

---



