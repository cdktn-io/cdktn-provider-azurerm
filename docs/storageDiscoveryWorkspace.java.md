# `storageDiscoveryWorkspace` Submodule <a name="`storageDiscoveryWorkspace` Submodule" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageDiscoveryWorkspace <a name="StorageDiscoveryWorkspace" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace azurerm_storage_discovery_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspace;

StorageDiscoveryWorkspace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scope(IResolvable|java.util.List<StorageDiscoveryWorkspaceScope>)
    .workspaceRoots(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .sku(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StorageDiscoveryWorkspaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope">scope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>></code> | scope block. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.workspaceRoots">workspaceRoots</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.scope"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#scope StorageDiscoveryWorkspace#scope}

---

##### `workspaceRoots`<sup>Required</sup> <a name="workspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.workspaceRoots"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.sku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#timeouts StorageDiscoveryWorkspace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScope` <a name="putScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope"></a>

```java
public void putScope(IResolvable|java.util.List<StorageDiscoveryWorkspaceScope> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putScope.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts"></a>

```java
public void putTimeouts(StorageDiscoveryWorkspaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetSku` <a name="resetSku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetSku"></a>

```java
public void resetSku()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspace;

StorageDiscoveryWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspace;

StorageDiscoveryWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspace;

StorageDiscoveryWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspace;

StorageDiscoveryWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageDiscoveryWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a StorageDiscoveryWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageDiscoveryWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageDiscoveryWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the StorageDiscoveryWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput">scopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput">workspaceRootsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots">workspaceRoots</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scope"></a>

```java
public StorageDiscoveryWorkspaceScopeList getScope();
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList">StorageDiscoveryWorkspaceScopeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeouts"></a>

```java
public StorageDiscoveryWorkspaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference">StorageDiscoveryWorkspaceTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.scopeInput"></a>

```java
public IResolvable|java.util.List<StorageDiscoveryWorkspaceScope> getScopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>>

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.timeoutsInput"></a>

```java
public IResolvable|StorageDiscoveryWorkspaceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---

##### `workspaceRootsInput`<sup>Optional</sup> <a name="workspaceRootsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRootsInput"></a>

```java
public java.util.List<java.lang.String> getWorkspaceRootsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceRoots`<sup>Required</sup> <a name="workspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.workspaceRoots"></a>

```java
public java.util.List<java.lang.String> getWorkspaceRoots();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageDiscoveryWorkspaceConfig <a name="StorageDiscoveryWorkspaceConfig" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspaceConfig;

StorageDiscoveryWorkspaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .scope(IResolvable|java.util.List<StorageDiscoveryWorkspaceScope>)
    .workspaceRoots(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .sku(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(StorageDiscoveryWorkspaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope">scope</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>></code> | scope block. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots">workspaceRoots</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#location StorageDiscoveryWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#name StorageDiscoveryWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_group_name StorageDiscoveryWorkspace#resource_group_name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.scope"></a>

```java
public IResolvable|java.util.List<StorageDiscoveryWorkspaceScope> getScope();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#scope StorageDiscoveryWorkspace#scope}

---

##### `workspaceRoots`<sup>Required</sup> <a name="workspaceRoots" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.workspaceRoots"></a>

```java
public java.util.List<java.lang.String> getWorkspaceRoots();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#workspace_roots StorageDiscoveryWorkspace#workspace_roots}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#description StorageDiscoveryWorkspace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#id StorageDiscoveryWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#sku StorageDiscoveryWorkspace#sku}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceConfig.property.timeouts"></a>

```java
public StorageDiscoveryWorkspaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#timeouts StorageDiscoveryWorkspace#timeouts}

---

### StorageDiscoveryWorkspaceScope <a name="StorageDiscoveryWorkspaceScope" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspaceScope;

StorageDiscoveryWorkspaceScope.builder()
    .displayName(java.lang.String)
    .resourceTypes(java.util.List<java.lang.String>)
//  .tagKeysOnly(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly">tagKeysOnly</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#display_name StorageDiscoveryWorkspace#display_name}.

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#resource_types StorageDiscoveryWorkspace#resource_types}.

---

##### `tagKeysOnly`<sup>Optional</sup> <a name="tagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tagKeysOnly"></a>

```java
public java.util.List<java.lang.String> getTagKeysOnly();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tag_keys_only StorageDiscoveryWorkspace#tag_keys_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#tags StorageDiscoveryWorkspace#tags}.

---

### StorageDiscoveryWorkspaceTimeouts <a name="StorageDiscoveryWorkspaceTimeouts" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspaceTimeouts;

StorageDiscoveryWorkspaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#create StorageDiscoveryWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#delete StorageDiscoveryWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#read StorageDiscoveryWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.7.0/docs/resources/storage_discovery_workspace#update StorageDiscoveryWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageDiscoveryWorkspaceScopeList <a name="StorageDiscoveryWorkspaceScopeList" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspaceScopeList;

new StorageDiscoveryWorkspaceScopeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get"></a>

```java
public StorageDiscoveryWorkspaceScopeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeList.property.internalValue"></a>

```java
public IResolvable|java.util.List<StorageDiscoveryWorkspaceScope> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>>

---


### StorageDiscoveryWorkspaceScopeOutputReference <a name="StorageDiscoveryWorkspaceScopeOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspaceScopeOutputReference;

new StorageDiscoveryWorkspaceScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly">resetTagKeysOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagKeysOnly` <a name="resetTagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTagKeysOnly"></a>

```java
public void resetTagKeysOnly()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput">tagKeysOnlyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly">tagKeysOnly</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeysOnlyInput`<sup>Optional</sup> <a name="tagKeysOnlyInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnlyInput"></a>

```java
public java.util.List<java.lang.String> getTagKeysOnlyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagKeysOnly`<sup>Required</sup> <a name="tagKeysOnly" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tagKeysOnly"></a>

```java
public java.util.List<java.lang.String> getTagKeysOnly();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScopeOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageDiscoveryWorkspaceScope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceScope">StorageDiscoveryWorkspaceScope</a>

---


### StorageDiscoveryWorkspaceTimeoutsOutputReference <a name="StorageDiscoveryWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.storage_discovery_workspace.StorageDiscoveryWorkspaceTimeoutsOutputReference;

new StorageDiscoveryWorkspaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|StorageDiscoveryWorkspaceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.storageDiscoveryWorkspace.StorageDiscoveryWorkspaceTimeouts">StorageDiscoveryWorkspaceTimeouts</a>

---



