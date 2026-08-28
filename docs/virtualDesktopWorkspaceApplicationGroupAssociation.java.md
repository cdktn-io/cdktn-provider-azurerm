# `virtualDesktopWorkspaceApplicationGroupAssociation` Submodule <a name="`virtualDesktopWorkspaceApplicationGroupAssociation` Submodule" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociation <a name="VirtualDesktopWorkspaceApplicationGroupAssociation" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association azurerm_virtual_desktop_workspace_application_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociation;

VirtualDesktopWorkspaceApplicationGroupAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationGroupId(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.applicationGroupId">applicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.applicationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#timeouts VirtualDesktopWorkspaceApplicationGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts"></a>

```java
public void putTimeouts(VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VirtualDesktopWorkspaceApplicationGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociation;

VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociation;

VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociation;

VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociation;

VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VirtualDesktopWorkspaceApplicationGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualDesktopWorkspaceApplicationGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualDesktopWorkspaceApplicationGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VirtualDesktopWorkspaceApplicationGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference">VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupIdInput">applicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupId">applicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeouts"></a>

```java
public VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference">VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference</a>

---

##### `applicationGroupIdInput`<sup>Optional</sup> <a name="applicationGroupIdInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupIdInput"></a>

```java
public java.lang.String getApplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.timeoutsInput"></a>

```java
public IResolvable|VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.applicationGroupId"></a>

```java
public java.lang.String getApplicationGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociationConfig <a name="VirtualDesktopWorkspaceApplicationGroupAssociationConfig" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociationConfig;

VirtualDesktopWorkspaceApplicationGroupAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationGroupId(java.lang.String)
    .workspaceId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.applicationGroupId">applicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationGroupId`<sup>Required</sup> <a name="applicationGroupId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.applicationGroupId"></a>

```java
public java.lang.String getApplicationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#application_group_id VirtualDesktopWorkspaceApplicationGroupAssociation#application_group_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#workspace_id VirtualDesktopWorkspaceApplicationGroupAssociation#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#id VirtualDesktopWorkspaceApplicationGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationConfig.property.timeouts"></a>

```java
public VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#timeouts VirtualDesktopWorkspaceApplicationGroupAssociation#timeouts}

---

### VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts <a name="VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts;

VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#create VirtualDesktopWorkspaceApplicationGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#delete VirtualDesktopWorkspaceApplicationGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/virtual_desktop_workspace_application_group_association#read VirtualDesktopWorkspaceApplicationGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference <a name="VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.virtual_desktop_workspace_application_group_association.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference;

new VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.virtualDesktopWorkspaceApplicationGroupAssociation.VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts">VirtualDesktopWorkspaceApplicationGroupAssociationTimeouts</a>

---



